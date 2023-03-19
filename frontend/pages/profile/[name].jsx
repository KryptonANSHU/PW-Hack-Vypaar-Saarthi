import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProfileError from "../../components/ProfileError";
import ProfileNavBar from "../../components/ProfileNavbar";
import TransparentButton from "../../utils/buttons/TransparentButton";
const endpoint =
  "https://polygon-mainnet.g.alchemy.com/v2/9OW3bb6tEhdBQ6UcWRHW4vklQzD2a_qN";

export default function UserPage({ data, collectionList }) {
  const [localNFTs, setLocalNFTs] = useState([]);
  const [load, setLoad] = useState(true);

  if (!data) {
    console.log('Hellloo')
    return <ProfileError />
  }
  console.log(load)

  const [myNFTs, setMyNFTs] = useState([]);

  const QUERYprefix = "contractAddresses%5B%5D=";
  const smartContracts = collectionList.map((element) => {
    return QUERYprefix + element.contract_address;
  });

  const contractString = smartContracts.toString().split(",").join("&");

  const fetchMyNFTs = async (retryAttempt) => {
    if (retryAttempt === 5 || !data?.wallet_address) {
    }
    if (data?.wallet_address) {
      let result;
      try {
        result = await fetch(
          `${endpoint}/getNFTs?owner=${data?.wallet_address}&${contractString}`
        ).then((response) => response.json());
      } catch (e) {
        fetchMyNFTs(retryAttempt + 1);
      }
      setMyNFTs(result.ownedNfts);
      console.log("MY ON-CHAIN NFTs", result.ownedNfts);
      return result;
    }
  };
  const fetchMyLocalNFTs = async () => {
    // console.log("tokens request",tokens,process.env.API );
    if (data?.id) return;
    try {
      const localnfts = await axios.get(
        `${process.env.API}/localnft/getNftsOfUser/${data.id}`
      );
      console.log("MY LOCAL NFTS", localnfts.data);
      setLocalNFTs(localnfts.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyNFTs();
    fetchMyLocalNFTs();
  }, []);

  const MyNFTComponent = () => {
    return (
      <div className="w-full flex flex-wrap items-cente mx-auto ">
        {myNFTs.map((nft, index) => {
          if (nft) nft.id.tokenId = parseInt(nft.id.tokenId, 16);
          return (
            <div className=" mx-6 my-6">
              <Link
                href={`/onchain/${nft.contract.address}/${nft.id.tokenId}`}
                key={nft.contract.address}
              >
                {collectionItem(nft, false, false)}
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const collectionItem = (nft, heart, isLocal) => {
    return (
      <div className="border-[1px] border-gray-600 p-4 max-w-sm w-[320px]  flex flex-col justify-between items-center">
        <img
          src={isLocal ? nft?.nft_image_url : nft?.media[0].gateway}
          alt="img"
          className="w-[250px] h-[320px] object-center object-cover"
        />
        <div className=" w-full my-3">
          <h1 className="text-xl font-semibold tracking-wide  text-left w-full">
            {isLocal ? nft?.name : nft?.metadata.name}
          </h1>
          <h1 className="font-light  tracking-wide  text-left w-full text-sm text-gray-300 ">
            {nft?.["collection.name"]}
          </h1>
          <h1 className="font-light  tracking-wide  text-left w-full text-sm text-gray-300 ">
            Token ID:{isLocal ? nft?.token_id : nft?.id.tokenId}
          </h1>
        </div>
        <div className="mx-auto w-full flex justify-between items-center mt-2">
          {/* <button className="flex justify-around w-36 text-white py-3 px-3 md:px-4 border-[1px] border-white rounded-sm">
          <h1>{nft?.claimable ? <>Claim now</> : <>View</>}</h1>
          <h1>-{">"}</h1>
        </button> */}
          <TransparentButton height="60" width="180">
            {isLocal ? (
              <> View -{">"} </>
            ) : nft?.claimable ? (
              <>Claim now -{">"} </>
            ) : (
              <>View -{">"}</>
            )}
          </TransparentButton>

          <img
            src={heart ? "/icons/heart.png" : "/icons/heart-outlined.png"}
            alt="img"
            className={heart ? "w-14" : "w-6"}
          />
        </div>
      </div>
    );
  };

  const ListNFTComponent = () => {
    return (
      <>
        <div className="w-full pt-6 text-white font-manrope px-4 md:px-10 lg:px-20  min-h-screen">
          <div className="">
            <h1 className="text-3xl text-custom-blue">My Wallet</h1>
          </div>
          {myNFTs.length === 0 ? (
            <div className=" min-h-[400px]">
              <div className="flex items-center justify-center bg-custom-blue/20 p-16 my-4 rounded-lg">
                <h1 className="text-lg text-custom-blue">
                  Currently you have not Claimed any NFT
                </h1>
              </div>
            </div>
          ) : (
            <>
              <div className="w-full py-8  block mx-auto ">
                {myNFTs.length ? <MyNFTComponent /> : null}
              </div>
            </>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="w-screen text-white font-manrope">
      <div className="w-full h-[32vh] bg-catalogue-background-1 bg-cover flex justify-center items-end mb-10">
        <div className="w-full max-w-md flex flex-col items-center p-4">
          <h1 className="text-3xl my-2 arcade-font">Hash Case</h1>
          <h1 className="my-1 text-center font-manrope text-xl text-gray-300">
            Welcome to Your Profile {data.username}
          </h1>
        </div>
      </div>

      {load ? (
        <>
          <div className="w-full flex justify-center ">
            <div className="max-w-7xl w-full flex ">
              <div className="flex-[1] mr-5 ">
                <ProfileNavBar user_data={data} />
              </div>

              <div className="flex-[3] ml-5flex-wrap">
                <ListNFTComponent />
              </div>
            </div>
          </div>
        </>
      ) : (
        <ProfileError />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;
try{

  let { data } = await axios.get(`${process.env.API}/user/getUsername/${name}`);
  
  const allCollections = await axios.get(
    `${process.env.API}/collections/getallNames`
    );
    console.log(allCollections.data);
    
    return {
      props: {
        data,
        collectionList: allCollections.data,
      },
    };
  }catch(error){
    return {
      props: {
        data:null,
        collectionList:null
      },
  }
  }
}




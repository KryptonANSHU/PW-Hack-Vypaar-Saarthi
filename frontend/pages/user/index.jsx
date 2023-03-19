import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../utils/Store";
import axios from "axios";
import { useRouter } from "next/router";
import UserLayout from "../../components/layouts/UserLayout";
import { ethers } from "ethers";
import NFTABI from "../../utils/ABI1155.json";
import AddEmailModal from '../../components/Modal/AddEmailModal';
import AlertModal from '../../components/Modal/AlertModal';
import { addWallet } from "../../utils/user";
import Profile from "./profile";

export default function User({ collections }) {
  const { state, dispatch } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [activeOrders, setActiveOrders] = useState([]);
  const [nftIds, setNftIds] = useState([]);
  const [showAddEmailModal, setShowAddEmailModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const router = useRouter();

  const userInst = state.user;

  const jwt = state.jwt;
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

  const metaMaskLoginHandler = async (e) => {
    e.preventDefault();
    addWallet(dispatch, state);
  };

  // get my nfts

  const getOwnedTokens = async () => {
    let tokenList = [];
    console.log(state.user);
    if (!state.user.wallet_address) return;
    if (!collections.length) return;
    await Promise.all(
      collections.map(async (collection) => {
        console.log(collection);
        let tokensInCollection = { name: collection.name };
        try {
          // console.log(collection);
          const provider = new ethers.providers.Web3Provider(
            window.ethereum,
            "any"
          );
          let contract = new ethers.Contract(
            collection.contract_address,
            NFTABI,
            provider
          );
          // console.log(contract);
          let address = state.user.wallet_address;
          let tokens = await contract.tokensOfOwner(address);
          tokens = tokens.map((token) => token.toNumber());
          // console.log('TOKENS', tokens);
          tokens = tokens.map((t, i) => {
            return {
              id: t,
              contract_id: 1,
            };
          });
          // tokens = tokens.filter((t) => t.quantity > 0);
          console.log(tokens);
          tokensInCollection.tokens = tokens;
          // return tokens;
          tokenList.push(tokensInCollection);
        } catch (e) {
          console.log(e);
        }
      })
    );
    console.log("allTokens", tokenList);
    setNftIds(tokenList);
    return tokenList;
  };

  // const fetchMyNFTs = async () => {
  //   console.log("Fethick",collection)
  //   let tokens = await getOwnedTokens();
  //   // console.log("tokens request",tokens,process.env.API );
  //   try {
  //     const allmyNFTs = await axios.post(`${process.env.API}/merchandise/getallbyIDs`,
  //       tokens,
  //     );
  //     console.log("MY NFTS",allmyNFTs.data);
  //     setMyNFTs(allmyNFTs.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getOwnedTokens();
  }, []);

  // get orders
  const getOrders = async () => {
    const response = await axios.post(`/backend/orders/getAllOrderSummary`, {
      userId: state.user.id,
    });
    // console.log(response.data);

    setOrders(response.data);
    setActiveOrders(
      response.data.filter(
        (order) =>
          order.status === "processing" ||
          order.status === "pending" ||
          order.status === "out for delivery"
      )
    );
    // console.log("USER",state.user.user_instance,response.data);
  };

  useEffect(() => {
    if (!state.user) {
      router.push("/");
    } else {
      getOrders();
    }
  }, []);

  // get my nfts

  const formListItem = (type, value, checked, content) => {
    return (
      <div className="flex gap-x-4 items-center">
        <input
          type={type}
          value={value}
          checked={checked}
          className="accent-custom-blue/40"
        />
        {content}
      </div>
    );
  };

  return (
    <div className="flex text-white">
      <AlertModal
        showModal={showSuccessModal}
        setShowModal={setShowSuccessModal}
        text="Wallet Connected"
        type="success"
      />
      <AddEmailModal showModal={showAddEmailModal} setshowModal={setShowAddEmailModal} />
      {/* <UserLayout> */}
        {/* AVATAR SECTION */}
        {/* <div className='w-full bg-custom-blue/20 p-8 mx-16 rounded-lg max-w-4xl'>
          <div className='w-full flex flex-col gap-4 items-center'>
            <div className='w-full'>
              <h1 className='text-3xl font-semibold'>AVATAR</h1>
              <div className='flex items-center my-12 justify-around'>
                <img src="/images/user/user_image.png" alt="" className="w-20 h-20" />
                <div>
                  <h1 className='text-lg font-thin'>Choose image</h1>
                  <div className='flex text-sm font-thin items-center'>
                    <button className='border-[1px] border-white px-6 py-1 my-4 mr-8'>Choose file</button>
                    <h1>No file choosen</h1>
                  </div>
                </div>
                <button className='bg-custom-blue px-6 py-2 rounded-sm text-sm'>
                  Upload
                </button>
              </div>
              <h1 className='text-gray-300 font-thin text-sm'>
                You can inject a little more personality into your profile and help people recognize you across NFT Apparel by uploading an avatar (an image, photo or other graphic icon of "you").
              </h1>
            </div>
          </div>
        </div> */}

        <Profile />
        {/* <div className='w-full bg-custom-blue/20 p-8 mx-16 mt-16 rounded-lg max-w-4xl'>
          <div className='w-full flex flex-col gap-4 items-center'>
            <div className='w-full'>
              <h1 className='text-3xl font-semibold'>NOTIFICATIONS</h1>
              <form className='flex items-start gap-8 mt-8'>
                <label
                  htmlFor="notifications"
                  className='font-thin flex mb-2 mr-12'>
                  Email Subscriptions
                </label>
                <div className='flex flex-col gap-y-4'>
                  {formListItem("checkbox", "notifications", false, "Artists and designers newsletter")}
                  {formListItem("checkbox", "notifications", true, "Offers, discounts, coupons and news")}
                  {formListItem("checkbox", "notifications", false, "Always show my real name")}
                  {formListItem("checkbox", "notifications", true, "Invitations to surveys, beta groups and interviews")}
                  {formListItem("checkbox", "notifications", false, "Reminders and suggestions")}
                  {formListItem("checkbox", "notifications", false, "Always show my real name")}
                </div>
              </form>
            </div>
          </div>
        </div> */}

        {/* <div className='w-full my-16 flex justify-end'>
          <button className='border-[1px] px-4 py-2'>
            Save Changes
          </button>
        </div> */}
      {/* </UserLayout> */}
    </div>
  );
}

export async function getServerSideProps() {
  // console.log(context.query);

  const { data } = await axios.get(
    `${process.env.API}/collections/getallNames`
  );

  return {
    props: {
      collections: data,
    },
  };
}

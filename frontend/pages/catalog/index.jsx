
import { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../utils/Store';

import { useRouter } from 'next/router';
import styles from '../../components/Navbar.module.css';
import designStyles from "../../components/home/effects.module.scss";
import notify from '../../utils/notify';


const catalogStyles = {
  paraHead: 'text-lg md:text-2xl font-semibold tracking-wide',
  para: 'font-light my-1 tracking-wide',
}

export default function Catalog({ collectionList }) {
  const { state, dispatch } = useContext(StoreContext);

  const router = useRouter();


  const [openFilter, setOpenFilter] = useState(false);
  const [ownedTokens, setOwnedTokens] = useState();

  const toggleFilters = () => {
    setOpenFilter((prev) => !prev);
  };


  const [myNFTs, setMyNFTs] = useState([]);

  const [localNFTs, setLocalNFTs] = useState([]);

 

  const CollectionItem = ({img, heart, imglink, name}) => {
    return (
      <div className='border-[1px] border-gray-600 p-4 md:p-12'>
        <img src={imglink} alt="img" className='w-[350px] object-cover object-center' />
        <h1 className="text-lg md:text-2xl font-semibold tracking-wide mt-4">{name}</h1>
        <div className="flex items-center">
          <h1 className={styles.para}>HascCollect Official</h1>
          <img src="/images/homepage/home_star.png" alt="img" className="w-4 h-4 mx-2" />
        </div>
        <div className='mt-6 w-full flex justify-between items-center gap-x-4'>
          <button
            className="flex justify-between w-48 my-2 p-3 px-8 border-[1px] border-white rounded-sm">
            <h1>Buy now</h1>
            <h1>-{'>'}</h1>
          </button>
        {/* <TransparentButton
            // onClick={() => router.push("/contact")}
            height="60"
            width="180"
          >
            Buy Now -{">"}
          </TransparentButton> */}
          <img src={heart ? "/icons/heart.png" : "/icons/heart-outlined.png"} alt="img" className={heart ? 'w-14' : 'w-6'} />
        </div>
      </div>
    )
  }

  const apply = () =>{
    notify("Applied to National Fund Bank")
  }

  return (
    <div className='w-full text-white bg-black'>
      <div className='w-full h-[32vh] bg-catalogue-background-1 bg-cover flex justify-center items-end'>
        <div className='w-full max-w-md flex flex-col items-center p-4'>
          <h1 className={'text-3xl my-2 ' + styles.arcadeFont}>BANK BAZAAR</h1>
          <h1 className='my-2 text-center font-manrope font-thin text-gray-300'>
            See the List of Banks
          </h1>
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center mt-8 md:mt-24'>
        

        <div className="max-w-5xl w-[90vw] font-thin flex flex-col items-center justify-center font-manrope mt-8 md:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:py-8 md:px-20 bg-transparent border-[1px] border-gray-600 items-center justify-between rounded-sm w-full">
            <img src="/images/homepage/agrawalCycle.jpg" alt="img" className="place-self-center w-[90%] sm:w-96 sm:h-80 col-span-1 m-4 object-cover object-center" />
            <div className="col-span-1 m-6 md:p-8 md:px-4 flex flex-col justify-center">
              <h1 className={catalogStyles.paraHead}>National Fund Bank</h1>
              <div className="relative">
                <div className={`absolute left-80 ${designStyles.glowingDotBig}`}></div>
              </div>
              <div className="flex items-center">
                <h1 className={styles.para}>Bengaluru</h1>
                <img src="/images/homepage/home_star.png" alt="img" className="w-4 h-4 mx-2" />
              </div>
              <div className='mt-2 w-full flex justify-between gap-x-6 items-center'>
                <button
                onClick={apply}
                  className=" bg-blue-600  flex justify-between w-44 lg:w-48 my-2 p-3 px-8 border-[1px] border-white rounded-sm">
                  <h1>Suggested Apply</h1>
                  <h1>-{'>'}</h1>
                </button>
              </div>
            </div>
          </div>

          <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:py-8 md:px-20 bg-transparent border-[1px] border-gray-600 items-center justify-between rounded-sm w-full">
            <img src="/images/homepage/rest.jpg" alt="img" className="place-self-center w-[90%] sm:w-96 sm:h-80 col-span-1 m-4 object-cover object-center" />
            <div className="col-span-1 m-6 md:p-8 md:px-4 flex flex-col justify-center">
              <h1 className={catalogStyles.paraHead}>Trust Us Bank</h1>
              <div className="relative">
                <div className={`absolute left-80 ${designStyles.glowingDotBig}`}></div>
              </div>
              <div className="flex items-center">
                <h1 className={styles.para}>Bengaluru</h1>
                <img src="/images/homepage/home_star.png" alt="img" className="w-4 h-4 mx-2" />
              </div>
              <div className='mt-2 w-full flex justify-between gap-x-6 items-center'>
                <button
                  className=" bg-gray-600 opacity-25 flex justify-between w-44 lg:w-48 my-2 p-3 px-8 border-[1px] border-white rounded-sm">
                  <h1>Apply Here</h1>
                  <h1>-{'>'}</h1>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl w-full font-thin flex flex-col md:flex-row gap-y-6 p-4 md:p-0 items-center justify-around font-manrope mb-24 mt-12">
          {/* <CollectionItem heart={false} imglink="https://hash-collect.s3.ap-south-1.amazonaws.com/website/token-img-sneakers.png" name="Cool Sneakers"/>
          <CollectionItem heart={false} imglink="https://hash-collect.s3.ap-south-1.amazonaws.com/website/token-img-tee.png" name="Incepthink Tee" /> */}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import styles from "./DiscoverMore.module.css";

const DiscoverMore = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={
          "w-full mt-16 md:p-16 bg-[url('https://hash-collect.s3.ap-south-1.amazonaws.com/website/home_background_1_2.png')] flex justify-center items-center bg-cover " +
          styles.manropeFont
        }
      >
        <div className="flex flex-col md:items-center text-center items-center ">
          <h1 className="m-2 text-sky-400 text-lg md:text-xl tracking-wide font-thin">
            Discover More
          </h1>
          <h1 className="m-2 mb-1.5 text-white text-3xl md:text-5xl font-semibold">
            Real world utility for your NFTs
          </h1>
          <h1 className="m-2 my-8 text-gray-300 text-sm md:text-base font-thin tracking-wide leading-loose">
            These NFT’s can help you with
          </h1>
          <div className="flex justify-around flex-col lg:flex-row text-lg font-semibold text-white  lg:w-[800px]">
            <div className=" w-full md:w-1/2">
              <ul>
                <li className="py-2">Authentication</li>
                <li className="py-2">warranty information</li>
                <li className="py-2">proof of ownership</li>
              </ul>
            </div>
            <div className=" w-full md:w-1/2">
              <ul>
                <li className="py-2">Entry to exclusive events</li>
                <li className="py-2">Access to members-only discounts</li>
                <li className="py-2">And much more!</li>
              </ul>
            </div>
          </div>
          <Link href="/about">
            <button className="m-2 my-4 text-white p-4 px-8 bg-gradient-to-r from-[#4A99D3] to-[#00A1D3] rounded-sm font-thin">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;

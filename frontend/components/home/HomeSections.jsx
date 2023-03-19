import Link from "next/link";
import React from "react";
import styles from "./HomeSections.module.css";
import designStyles from "./effects.module.scss";

const HomeSections = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-5xl w-[90vw] font-thin flex flex-col text-white items-center justify-center mt-40">
                <h1 className="text-center text-sky-400 text-xl tracking-wide font-thin">Events</h1>
                <h1 className="font-medium text-4xl md:text-5xl text-center m-8 mt-2">
                    Web3 Days @BITS Goa
                </h1>

                <div className="grid grid-cols-2 md:py-8 md:px-20 bg-[#00C2FF]/20 items-center justify-between rounded-sm">
                    <div className="flex w-full items-center justify-center col-span-2 md:col-span-1">
                        <img src="https://incepthink.mypinata.cloud/ipfs/QmbnoX9ksZ7zsueqP11RruzAksa1u34NjFembt66NrJTad" alt="creativesolstice" className="w-60 md:w-full m-4" />
                    </div>
                    <div className="col-span-2 md:col-span-1 m-4 md:m-6 p-4 md:p-8 px-4 flex flex-col justify-center">
                        <h1 className="text-lg md:text-2xl font-semibold tracking-wide">
                            Web3 Days @BITS Goa
                        </h1>
                        <div className="flex items-center">
                            {/* <h1 className="font-light text-sm md:text-base my-1 tracking-wide">
                                Marta Marcé
                            </h1> */}
                            <div className="relative">
                                <div
                                    className={` absolute top-6 left-12 ${designStyles.glowingDotBig}`}
                                ></div>
                            </div>
                            {/* <img
                                src="/images/homepage/home_star.png"
                                alt="img"
                                className="w-4 h-4 mx-2"
                            /> */}
                        </div>
                        <h1 className="my-4 text-xs md:text-sm text-gray-300 tracking-wide leading-loose">
                            Awarded to the Students of BITS Pilani Goa who attended the Blockchain Club's Web3 Days with HashCase."
                        </h1>
                        <a
                            href="/claim/localwallet/10"
                            className="w-full text-center md:w-fit my-2 text-xs md:text-base text-white p-3 px-8 border-[1px] border-white rounded-sm">Claim Now -{">"}
                        </a>
                    </div>
                </div>
            </div>
            {/*
       * Section 1
       */}
            <div
                className={
                    "max-w-7xl mt-24 md:w-[90vw] flex flex-col md:grid md:grid-cols-7 items-center justify-center " +
                    styles.manropeFont
                }
            >
                <div className="col-span-4 flex justify-end md:m-16 ">
                    <div className="flex flex-col items-center md:items-end mb-6 md:mb-0">
                        <img
                            src="https://hash-collect.s3.ap-south-1.amazonaws.com/website/home_face_medium.png"
                            alt="img"
                            className="w-1/2 md:w-[200px] md:m-2 bg-cover"
                        />
                        <div className="hidden md:flex">
                            <img
                                src="https://hash-collect.s3.ap-south-1.amazonaws.com/website/home_face_small.png"
                                alt="img"
                                className="hidden lg:flex w-[150px] m-2 bg-cover"
                            />
                        </div>
                    </div>
                    <div className="hidden pb-16 md:flex flex-col justify-center">
                        <div className="p-6">
                            <img
                                src="https://hash-collect.s3.ap-south-1.amazonaws.com/website/home_ellipse_hollow_large.png"
                                alt="img"
                                className="w-12 h-12 m-2 bg-cover"
                            />
                        </div>
                        <img
                            src="https://hash-collect.s3.ap-south-1.amazonaws.com/website/home_face_large.png"
                            alt="img"
                            className="w-[280px] m-2 bg-cover"
                        />
                    </div>
                </div>
                <div className="col-span-3 max-w-2xl md:max-w-lg flex flex-col text-center md:text-left">
                    {/* <h1 className="m-2 text-sky-400 text-lg md:text-xl tracking-wide font-thin">
            Discover More
          </h1> */}
                    <h1 className="m-2 mb-1.5 text-white text-3xl md:text-5xl font-semibold">
                        Digital Assets for Everyone
                    </h1>
                    <h1 className="m-2 my-8 text-gray-300 text-sm md:text-base font-thin tracking-wide leading-loose">
                        With the world becoming increasingly more digital, we empower brands and their consumers to own their own digital assets and avail their utilities
                    </h1>
                    <Link href="/about">
                        <button className="m-2 my-4 text-white p-4 px-8 bg-gradient-to-r from-[#4A99D3] to-[#00A1D3] rounded-sm font-thin">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

            {/*
       * Section 2
       */}
            <div
                className={
                    "w-full mt-16 md:p-16 bg-[url('https://hash-collect.s3.ap-south-1.amazonaws.com/website/home_background_1_2.png')] flex justify-center items-center bg-cover " +
                    styles.manropeFont
                }
            >
                <div className="flex flex-col md:items-center text-center items-center ">
                    {/* <h1 className="m-2 text-sky-400 text-lg md:text-xl tracking-wide font-thin">
            Discover More
          </h1> */}
                    <h1 className="m-2 mb-1.5 text-white text-3xl md:text-5xl font-semibold">
                        Real world utility for your NFTs
                    </h1>
                    <h1 className="m-2 my-8 text-gray-300 text-sm md:text-base font-thin tracking-wide leading-loose">
                        These NFT’s can help you with
                    </h1>
                    <div className="flex justify-around flex-col md:flex-row gap-y-4 gap-x-6 text-lg font-semibold text-white  lg:w-[800px]">
                        <div className=" w-full md:w-1/2">
                            <ul className="flex flex-col gap-y-4">
                                <li className="flex gap-y-4 py-2 w-full bg-custom-blue/20 items-center justify-between p-12 rounded-xl">
                                    Authentication <img src="/images/homepage/utility/authentication.png" alt="authentication" className="w-12 h-12" />
                                </li>
                                <li className="flex gap-y-4 py-2 w-full bg-custom-blue/20 items-center justify-between p-12 rounded-xl">
                                    Proof of Ownership <img src="/images/homepage/utility/ownership.png" alt="ownership" className="w-12 h-12" />
                                </li>
                                <li className="flex gap-y-4 py-2 w-full bg-custom-blue/20 items-center justify-between p-12 rounded-xl">
                                    Warranty Information <img src="/images/homepage/utility/warranty.png" alt="warranty" className="w-12 h-12" />
                                </li>
                            </ul>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <ul className="flex flex-col gap-y-4">
                                <li className="flex gap-y-4 py-2 w-full bg-custom-blue/20 items-center justify-between p-12 rounded-xl">
                                    Entry to Exclusive Events <img src="/images/homepage/utility/events.png" alt="events" className="w-12 h-12" />
                                </li>
                                <li className="flex gap-y-4 py-2 w-full bg-custom-blue/20 items-center justify-between p-12 rounded-xl">
                                    Members-Only Discounts <img src="/images/homepage/utility/discounts.png" alt="discounts" className="w-12 h-12" />
                                </li>
                                <li className="flex gap-y-4 py-2 w-full bg-custom-blue/20 items-center justify-between p-12 rounded-xl">
                                    And Much More! <img src="/images/homepage/utility/more.png" alt="more" className="w-12 h-12" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <Link href="/about">
            <button className="m-2 my-12 text-white p-4 px-8 bg-gradient-to-r from-[#4A99D3] to-[#00A1D3] rounded-sm font-thin">
              Read More
            </button>
          </Link> */}
                </div>
            </div >
        </div >
    );
};

export default HomeSections;

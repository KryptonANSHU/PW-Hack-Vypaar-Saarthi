import React from "react";
import styles from "./ContactUs.module.css";
import designStyles from "./effects.module.scss";
import { useRouter } from "next/router";
import TransparentButton from "../../utils/buttons/TransparentButton";
import Link from "next/link";

export default function ContactUs() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center font-manrope">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl w-[90vw] items-center justify-between">
                <div className="">
                    <img src="/images/homepage/socials.png" alt="socials" className="w-full" />
                </div>
                <div className="max-w-2xl md:max-w-lg flex flex-col text-center md:text-left items-center md:items-start">
                    {/* <h1 className="m-2 text-sky-400 text-lg md:text-xl tracking-wide font-thin">
            Discover More
          </h1> */}
                    <h1 className="m-2 mb-1.5 text-white text-3xl md:text-5xl font-semibold">
                        Don’t Miss Out
                    </h1>
                    <h1 className="m-2 my-8 text-gray-300 text-sm md:text-base font-thin tracking-wide leading-loose">
                        Follow our socials and don’t miss out on any updates. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                    <a href="https://twitter.com/hash_case" target="_blank">
                        <button className="w-fit m-2 my-4 text-white p-4 px-8 bg-gradient-to-r from-[#4A99D3] to-[#00A1D3] rounded-sm font-thin">
                            Follow us on Twitter
                        </button>
                    </a>
                </div>

            </div>

            <div className="bg-[#00C2FF]/20 m-4 mt-12 md:m-16 md:mt-28 p-4 md:py-6 md:px-20 max-w-5xl w-[90vw] grid md:grid-cols-2 gap-y-4 text-white items-center justify-center">
                <div className="text-lg md:text-2xl font-semibold">
                    <h1>Have any questions,</h1>
                    <h1>Feel free to ask!</h1>
                </div>
                <div className="relative md:place-self-end">
                    <div className={` absolute top-6 ${designStyles.glowingDotSmall}`}></div>
                    <button
                        className="w-fit text-xs md:text-base my-2 text-white p-3 px-8 border-[1px] border-white rounded-sm"
                        onClick={() => router.push("/contact")}
                        height="60"
                        width="180"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

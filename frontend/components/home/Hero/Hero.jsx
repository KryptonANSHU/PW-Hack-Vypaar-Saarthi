import React, { useContext, useState } from "react";

import InformationHero from "../InformationHero";
import styles from "./Hero.module.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { heroParticleEffects } from "../constants";
import designStyles from "../effects.module.scss";
import Link from "next/link";
import { useRouter } from 'next/router';
import { StoreContext } from "../../../utils/Store";
import AddEmailModal from "../../Modal/AddEmailModal";

export default function Hero() {

const registermsme = () =>{ 
  if (!state?.user) {
    setShowAddEmailModal(true);
    return;
  }
  router.push('/registermsme')

}

const registerbank = () =>{ 
  if (!state?.user) {
    setShowAddEmailModal(true);
    return;
  }
  router.push('/registerbank')
  
}

  const { state, dispatch } = useContext(StoreContext);
  const router = useRouter();
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [showAddEmailModal, setShowAddEmailModal] = useState(false);



  return (
    <>
    <AddEmailModal showModal={showAddEmailModal} setshowModal={setShowAddEmailModal} />
      <div className="hidden h-[90vh] md:grid grid-cols-7 font-manrope relative max-w-screen w-full">
        <div className="absolute h-full w-full   ">
          <Particles
            id="tsparticles"
            className="absolute w-full"
            init={particlesInit}
            options={heroParticleEffects}
          />
        </div>
        <div className=" z-20 col-span-5 h-full  flex flex-col justify-center items-center">
          <div className="relative">
            <div
              className={` absolute -top-16 -left-32 ${designStyles.glowingDotPinkSmall}`}
            ></div>
          </div>
          <div className="w-[85%] max-w-5xl px-14 flex flex-col justify-center">
            <div className="mt-20 grid grid-cols-4 justify-center">
              <div
                className={
                  "col-span-3 leading-relaxed tracking-tighter text-xl lg:text-3xl text-white " +
                  styles.arcadeFont
                }
              >
                Helping and Empowering {" "}
                <span className="text-orange-400">MSMEs</span>
                {/* Digital Collectibles that bridge the real and virtual world */}
              </div>
              <div className="col-span-2 text-lg text-gray-200 font-thin my-4">
              Accelerate your MSME's growth with our lightning-fast loan application process
              </div>
              <div className="col-span-3 flex items-center my-6">
              
                  <button
                    onClick={registermsme}
                    className={
                      styles.heroButton
                    }
                  >
                    Apply for Loan
                  </button>
                  
                
                
                <Link href="/about">
                  <h1 className="text-white font-light p-6 text-xs cursor-pointer">
                   Check Process for MSME -&gt;
                  </h1>
                </Link>
              </div>

              <div className="col-span-3 flex items-center ">
                
                  <button
                  onClick = {registerbank} 
                    className={
                      styles.heroButton
                    }
                  >
                    Review Loan Applications
                  </button>
                  
              
                
                <Link href="/about">
                  <h1 className="text-white font-light p-6 text-xs cursor-pointer">
                    For BANKS -&gt;
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 h-full bg-home-background-3 bg-cover bg-center md:flex flex-col justify-center">
          <div className="relative">
            <div
              className={` absolute -top-40 -left-32 ${designStyles.glowingDotSmallStrong}`}
            ></div>
          </div>
          <img
            src="https://hash-collect.s3.ap-south-1.amazonaws.com/website/home_how_it_works_2.png"
            alt="img"
            className="absolute mt-20 md:-left-24 -left-32 lg:-left-52 w-[450px]"
          />
        </div>
      </div>

      <div className={"w-full md:hidden grid grid-rows-3 font-manrope"}>
        <div className="row-span-1 relative bg-home-background-3 bg-cover bg-center flex w-full justify-center ">
          <img
            src="https://hash-collect.s3.ap-south-1.amazonaws.com/website/hero.png"
            alt="img"
            className="absolute -bottom-40 w-60"
          />
        </div>
        <div className="row-span-2 bg-cover bg-center flex flex-col px-4 text-center">
          <div className="mt-40 justify-center">
            <div
              className={
                "leading-relaxed tracking-tighter text-lg text-white " +
                styles.arcadeFont
              }
            >
              Helping and Empowering{" "}
              <span className="text-sky-400">MSMEs</span>
            </div>
            <div className="text-sm text-gray-300 font-thin my-2">
            Accelerate your MSME's growth with our lightning-fast loan application process
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <Link href="/registermsme">

                <button
                  className={
                    "font-thin rounded-sm bg-gradient-to-r from-[#4A99D3] to-[#00A1D3] p-4 my-6 text-xs text-white " +
                    styles.arcadeFont
                  }
                >
                  Apply for Loan
                </button>
              </Link>
              
              <Link href="/about">
                <h1 className="text-white font-light p-6 text-xs cursor-pointer">
                  Learn more -&gt;
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-4 flex justify-center items-center">
        {/* <InformationHero /> */}
      </div>
    </>
  );
}

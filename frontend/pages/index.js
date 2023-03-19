import Head from "next/head";

import Hero from "../components/home/Hero/Hero";
import Working from "../components/home/Working";
import ContactUs from "../components/home/ContactUs";
import HomeSections from "../components/home/HomeSections";
import DiscoverMore from "../components/home/DiscoverMore";

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {

useEffect(() => {
Aos.init({
  duration: 800,
  easing: 'ease-in-out'
});
}, [])


  return (
    <>
      <div className="max-w-screen w-full flex flex-col items-center">
        <div><Hero /></div>
        <div><Working /></div>
      
      </div>
    </>
  );
}

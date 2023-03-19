import React, { useEffect, useState } from "react";
import Thank_You from "../assets/images/icon-thank-you.svg";
import { useRouter } from "next/router";
import LoadingComponent from '../../LoadingComponent/LoadingComponent'
import LoadingModal from "../../Modal/LoadingModal";


export default function ThankYou() {
  const [loading, setLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
           setLoading(true)
        }, 5000);
    }, [])
    
    useEffect(() => {
        setTimeout(() => {
          router.push('/catalog')
        }, 10000);
    }, [])
    
  return (
    <div className="panel panel-5 ">
      <div className="inner">
        <LoadingComponent />
        <LoadingModal showModal={loading} />
      </div>
    </div>
  );
}

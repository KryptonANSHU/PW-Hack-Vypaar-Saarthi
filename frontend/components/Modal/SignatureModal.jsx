import React, { useContext, useState } from 'react'
import { StoreContext } from '../../utils/Store';
import { useAccount, useSignMessage } from "wagmi";
import { walletConnectLogin } from "../../utils/user";
import GenericModal from './GenericModal';
import notify from '../../utils/notify';

const styles = {
    label: "block text-gray-300 text-sm font-bold mb-2",
    input: "px-3 py-3 placeholder-gray-400 text-gray-100 bg-transparent border-[1px] border-gray-500 text-sm shadow focus:outline-none focus:ring w-full",
    button: "bg-custom-blue text-white text-sm font-bold uppercase px-6 py-3 rounded w-full max-w-sm",
}


const SignatureModal = ({ showModal, setshowModal, message, userData, setshowAuthModal }) => {

    const { state, dispatch } = useContext(StoreContext)

    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();

    const handleSign = async (e) => {
        e.preventDefault();

        if (!isConnected) {
            setshowModal(false);
            setshowAuthModal(true);
            return
        }

        console.log("Signing Message");

        try {
            const signature = await signMessageAsync({ message });
            const loginSuccess = walletConnectLogin(dispatch, userData.address, signature, message);
            console.log("Succesful Sign In, Redirecting to User Page");
        } catch (error) {
            notify("Error Signing Message", "error");
            console.log(error);
        }
        setshowModal(false);
        setshowAuthModal(false);
    }
    if (showModal)
        return (
            <GenericModal heading="Login" subheading="Your wallet is connected!" showModal={showModal} setshowModal={setshowModal}>
                <div className="flex flex-col items-center justify-center">
                    {/* <h1 className="text-xl font-bold text-gray-100 mb-4">
                    
                </h1> */}
                    <p className="text-gray-300 text-sm mb-6 w-full text-left">
                        One last step before you are logged in...
                    </p>
                    <button
                        onClick={handleSign}
                        className={styles.button}
                    >
                        Sign Message
                    </button>
                </div>
            </GenericModal>
        )
    else return <></>
}

export default SignatureModal
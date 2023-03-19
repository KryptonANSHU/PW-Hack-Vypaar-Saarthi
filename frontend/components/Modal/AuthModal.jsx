import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { StoreContext } from '../../utils/Store';
import { connectToMetamask, connectWalletConnect, walletConnectLogin } from '../../utils/user';
import GenericModal from './GenericModal';

import { useAccount, useConnect, useSignMessage, useDisconnect, chain as wagmiChain } from "wagmi";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import SignatureModal from './SignatureModal';

const styles = {
    label: "block text-gray-300 text-sm font-bold mb-2",
    input: "px-3 py-3 placeholder-gray-400 text-gray-100 bg-transparent border-[1px] border-gray-500 text-sm shadow focus:outline-none focus:ring w-full",
    button: "bg-custom-blue text-white text-sm font-bold uppercase px-6 py-3 rounded w-full max-w-sm",
}

const AuthModal = ({ showModal, setshowModal }) => {
    const { state, dispatch } = useContext(StoreContext)
    const router = useRouter();
    const path = router.asPath;
    console.log(path);

    const { connectAsync } = useConnect({
        chainId: wagmiChain.polygon,
    });
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();

    const [showSignatureModal, setshowSignatureModal] = useState(false);
    const [message, setMessage] = useState(null);
    const [userData, setUserData] = useState(null);

    const metamaskLoginHandler = async () => {
        const loginSuccess = await connectToMetamask(dispatch);
        if (loginSuccess) {
            setshowModal(false);
        }
    }

    const googleLoginHandler = async () => {
        setshowModal(false);
        const idToken = await state.magic.oauth.loginWithRedirect({
            provider: 'google',
            redirectURI: `${process.env.NEXT_PUBLIC_URL}/redirect?link=${path}`,
            // scope: ['user:email'] /* optional */,
        });
        console.log(idToken)
    }

    const walletConnectHandler = async () => {
        // const loginSuccess = await connectWallet(dispatch, authenticate, isAuthenticated, user);
        // if (loginSuccess) {
        //     setshowModal(false);
        // }

        if (isConnected) {
            await disconnectAsync();
        }

        console.log("Connect To Site Via Wallet");

        const userData = { network: "evm" };
        // const userData = {network: 'evm', address: '0x66A6E5e6C48aa15661C72047dec2f2f9E2137f99', chain: 1};
        try {
            const { account, chain } = await connectAsync({
                connector: new WalletConnectConnector({
                    chains: [wagmiChain.polygon],
                    options: {
                        qrcode: true,
                        qrcodeModalOptions: {
                            mobileLinks: ["rainbow", "metamask", "argent", "trust"],
                        },
                    }
                }),
            });
            userData.address = account;
            userData.chain = chain.id;

            const data = await connectWalletConnect(dispatch, userData);

            const message = data.message;
            setMessage(message);
            setUserData(userData);

            setshowSignatureModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    if (showModal)
        return (
            <>
                <GenericModal heading={"Connect"} setshowModal={setshowModal} >
                    <div className='flex flex-col justify-center items-center w-full px-8 gap-y-6 mt-6 mb-12'>
                        {/* 
                    Welcome to HashCase
                    your web2 gateway to the web3 world
                    Please connect to continue
                     */}
                        <div className='w-full text-left'>
                            <h1 className='text-2xl text-custom-blue'>Welcome to HashCase</h1>
                            <h2 className='text-lg'>Your web2 gateway to the web3 world</h2>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <button
                                className='flex gap-x-4 w-full max-w-sm justify-center items-center bg-white -p-4 rounded'
                                onClick={metamaskLoginHandler}
                                type='button'
                            >
                                <img src='/images/login/login-metamask-img.png' alt='metamask' className='h-12' />
                                <h1 className='text-gray-700 font-semibold mx-4'>Metamask</h1>
                            </button>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <button
                                className='flex gap-x-4 w-full max-w-sm justify-center items-center bg-white -p-4 rounded'
                                onClick={walletConnectHandler}
                                type='button'
                            >
                                <img src='/images/login/login-walletconnect-img.png' alt='wallet connect' className='h-12' />
                                <h1 className='text-gray-700 font-semibold'>Wallet Connect</h1>
                            </button>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center gap-y-4'>
                            <h1 className='w-full text-left'>Don't have a wallet? Try your preferred social provider!</h1>
                            <button
                                className='flex gap-x-4 w-full max-w-sm justify-center bg-white p-2.5 rounded'
                                onClick={googleLoginHandler}
                                type='button'
                            >
                                <img src='/icons/google.svg' alt='google' className='w-6 h-6' />
                                <h1 className='text-gray-700 font-semibold'>Continue With Google</h1>
                            </button>
                        </div>
                    </div>
                </GenericModal>
                <div className="z-50">
                    <SignatureModal showModal={showSignatureModal} setshowModal={setshowSignatureModal} setshowAuthModal={setshowModal} message={message} userData={userData} />
                </div>
            </>
        );
    else return <></>;
}

export default AuthModal
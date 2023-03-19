import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { StoreContext } from '../../utils/Store';
import Cookies from "js-cookie";
import GenericModal from './GenericModal';
import { loginWithEmail, loginWithGoogle } from '../../utils/user';
import { useGoogleLogin } from '@react-oauth/google';

const styles = {
    label: "block text-gray-300 text-sm font-bold mb-2",
    input: "px-3 py-3 placeholder-gray-400 text-gray-100 bg-transparent border-[1px] border-gray-500 text-sm shadow focus:outline-none focus:ring w-full",
    button: "bg-custom-blue text-white text-sm font-bold uppercase px-6 py-3 rounded w-full max-w-sm",
}

export default function LoginModal({ showModal, setshowModal, showSignUpPrompt, setshowSignUpModal }) {
    const { state, dispatch } = useContext(StoreContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        const loginSuccess = await loginWithEmail(dispatch, email, password);
        if (loginSuccess) {
            setshowModal(false)
        } else {
            console.log("login failed")
        }
    }

    const googleLoginHandler = useGoogleLogin({
        onSuccess: async codeResponse => {
            console.log(codeResponse)
            const loginSuccess = await loginWithGoogle(dispatch, codeResponse.code)
            if (loginSuccess) {
                setshowModal(false)
            } else {
                console.log('login failed')
            }
        },
        onFailure: error => {
            console.log(error)
        },
        flow: 'auth-code',
    });


    if (showModal)
        return (
            <GenericModal heading={"sign in"} setshowModal={setshowModal} >
                <form className='w-full px-8'>
                    <div className="relative w-full mb-3">
                        <label
                            className={styles.label}
                            htmlFor="grid-password"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Email"
                            style={{ transition: "all .15s ease" }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="relative w-full mb-3">
                        <label
                            className={styles.label}
                            htmlFor="grid-password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Password"
                            style={{ transition: "all .15s ease" }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="text-center mt-6 max-w-sm flex items-center justify-center">
                        <button
                            className={styles.button}
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={login}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className='w-full flex justify-center'>
                        <button
                            className='flex gap-x-4 w-full max-w-sm justify-center bg-white p-2.5 mt-4 rounded'
                            onClick={googleLoginHandler}
                            type='button'
                        >
                            <img src='/icons/google.svg' alt='google' className='w-6 h-6' />
                            <h1 className='text-gray-700 font-semibold'>Login With Google</h1>
                        </button>
                    </div>
                    {
                        (!showSignUpPrompt ? null :
                            <div className='w-full text-center'>
                                <h1 className='mt-4 text-sm'>Don't have an account? <span className='text-custom-blue cursor-pointer' onClick={() => {
                                    setshowSignUpModal(true)
                                    setshowModal(false)
                                }}>
                                    Sign Up
                                </span>
                                </h1>
                            </div>
                        )
                    }
                </form>
            </GenericModal>
        );
    else return <></>;
}
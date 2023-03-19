import React, { useContext, useState } from 'react';
import { StoreContext } from '../../utils/Store';
import GenericModal from './GenericModal';
import { loginWithGoogle, signupWithEmail } from '../../utils/user';
import { useGoogleLogin } from '@react-oauth/google';

const styles = {
    label: "block text-gray-300 text-sm font-bold mb-2",
    input: "px-3 py-3 placeholder-gray-400 text-gray-100 bg-transparent border-[1px] border-gray-500 text-sm shadow focus:outline-none focus:ring w-full",
    button: "bg-custom-blue text-white text-sm font-bold uppercase px-6 py-3 rounded w-full max-w-sm",
}

export default function SignupModal({ showModal, setshowModal, showLoginPrompt, setshowLoginModal }) {
    const { state, dispatch } = useContext(StoreContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const signup = async (e) => {
        e.preventDefault();
        const signupSuccess = await signupWithEmail(dispatch, email, password, confPassword);
        if (signupSuccess) {
            setshowModal(false)
        } else {
            console.log("signup failed");
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
            <GenericModal heading={"sign up"} subheading={"No Crypto Wallet Required"} setshowModal={setshowModal}>
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
                    <div className="relative w-full mb-3">
                        <label
                            className={styles.label}
                            htmlFor="grid-password"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Password"
                            style={{ transition: "all .15s ease" }}
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                        />
                    </div>

                    <div className="text-center mt-6">
                        <button
                            className={styles.button}
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={signup}
                        >
                            Sign Up
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
                    {(!showLoginPrompt ? null :
                        <div className='w-full text-center'>
                            <h1 className='mt-4 text-sm'>Already have an account? <span className='text-custom-blue cursor-pointer' onClick={() => {
                                setshowLoginModal(true)
                                setshowModal(false)
                            }}>
                                LogIn
                            </span>
                            </h1>
                        </div>
                    )}
                </form>
            </GenericModal>
        );
    else return <></>;
}
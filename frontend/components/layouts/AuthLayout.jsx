import React, { useContext } from 'react'
import HashCaseLogo from '../others/HashCaseLogo'
import styles from '../Navbar.module.css'
import { useRouter } from 'next/router'
import { connectToMetamask, loginWithGoogle } from '../../utils/user'
import { StoreContext } from '../../utils/Store'
import { useGoogleLogin } from '@react-oauth/google'

const AuthLayout = ({ children, signIn }) => {
  const { state, dispatch } = useContext(StoreContext);
  const router = useRouter();

  const metaMaskLoginHandler = async () => {
    const connectSuccessful = await connectToMetamask(dispatch);
    if (connectSuccessful) {
      router.push('/');
    }
  }

  const googleLoginHandler = useGoogleLogin({
    onSuccess: async codeResponse => {
      console.log(codeResponse)
      const loginSuccess = await loginWithGoogle(dispatch, codeResponse.code)
      if (loginSuccess) {
        router.push('/')
      } else {
        console.log('login failed')
      }
    },
    onFailure: error => {
      console.log(error)
    },
    flow: 'auth-code',
  });

  return (
    <div className='w-full h-screen grid grid-cols-3 relative z-50 bg-black text-white font-manrope'>
      <div className='col-span-4 bg-custom-blue/20 backdrop-blur-2xl'>
        <div className="flex items-center justify-between w-full mt-10 px-16">
          <div className=''>
            <HashCaseLogo />
          </div>
          <button
            className={"" + styles.arcadeFont}
            onClick={() => {
              signIn ? router.push('/signup') : router.push('signin');
            }}
          >
            SIGN {signIn ? "UP" : "IN"}
          </button>
        </div>
        <div className='h-full flex flex-col items-center mt-8'>
          {/* <div className='grid grid-cols-2 gap-x-6 items-center'>
            <h1 className={'text-2xl h-fit ' + styles.arcadeFont}>CONNECT</h1>
            <button
              className='flex items-center'
              onClick={metaMaskLoginHandler}
            >
              <img src="/images/login/login-metamask-img.png" alt="img" className='w-12 h-20' />
              <img src="/images/login/login-metamask-text.png" alt="METAMASK" className='w-30 h-20' />
            </button>
          </div> */}
          <div className='w-full max-w-md border-t-[1px] border-gray-700 my-4'>
            {children}
          </div>
          {/* <button
            className='flex gap-x-4 w-full max-w-md justify-center bg-white p-4 mt-2 rounded-lg'
            onClick={googleLoginHandler}
          >
            <img src='/icons/google.svg' alt='google' className='w-6 h-6' />
            <h1 className='text-gray-700 font-semibold'>Login With Google</h1>
          </button> */}
        </div>
      </div>
      {/* <div className='col-span-3 flex items-center justify-center bg-home-background-3 bg-cover' /> */}
    </div>
  )
}

export default AuthLayout
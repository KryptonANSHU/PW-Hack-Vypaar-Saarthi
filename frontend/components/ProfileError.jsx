import React from 'react'
import Link from 'next/link'


const ProfileError = () => {
  return (
    <div className='w-full  text-white bg-black font-manrope'>
    <div className='w-full h-[35vh] md:h-[24vh] bg-catalogue-background-1 bg-cover flex justify-center items-end'>
      <div className='w-full flex items-center justify-center p-4 text-center'>
        <h1 className={'text-2xl my-2 w-full '}>CLAIM THE FREE NFT ASSOCIATED WITH YOUR ITEM!</h1>
      </div>
    </div>
    <div className='w-full grid grid-cols-3 justify-center gap-x-16 p-4 md:p-32'>
      <div className='col-span-3 md:col-span-2'>
        <div>
          <h1 className='text-4xl font-semibold mt-4 md:mt-0'>Invalid Username / User does Not Exist in Database</h1>
        </div>
        <div className='mt-5'>
            <Link href='/'>
                Go Home
            </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileError
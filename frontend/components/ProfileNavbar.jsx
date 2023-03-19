import React from 'react'
import sampleImage from '../public/images/SampleImg.png'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Image from 'next/image';


export default function ProfileNavBar({user_data}) {
  return (
    <div className="border-custom-blue/40 bg-custom-blue/20  text-gray-300 flex-col rounded-md p-2">
      <div className='flex'>
        <div className='mx-3'>
            <Image src={user_data.profileImg ? user_data.profileImg : sampleImage}  alt="Profile Image"/>
        </div>
        <div className='text-center w-full my-auto'>
            <h1 className='text-2xl font-bold'>{user_data.username}</h1>
            <h1 className='text-sm  text-blue-400'>{user_data.email}</h1>
        </div>
      </div>

      <div className='mt-8 text-center'>
            <button className='text-center border-1 border-custom-blue/40 w-[80%] bg-blue p-4 rounded-lg '>
                Share
            </button>
      </div>
      <div className='mt-2 text-center'>
            <button className='text-center border-1 border-custom-blue/40 w-[80%] bg-blue p-4 rounded-lg'>
                Sign Out
            </button>
      </div>
      <div className="flex w-1/2 mx-auto my-5 border-1 p-3 rounded-md bg-custom-blue/10 border-custom-blue/40 justify-between text-center">
            <InstagramIcon className="relative mr-3" fontSize="large" />
            <TwitterIcon className="relative" fontSize="large" />
      </div>
    </div>
  )
}

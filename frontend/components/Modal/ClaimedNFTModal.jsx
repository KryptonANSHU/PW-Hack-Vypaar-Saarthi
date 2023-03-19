import { useRouter } from 'next/router'
import React, { userState, useEffect } from 'react'
import getIntentByNFTId from '../../utils/nfts/twitterIntentGenerator'
import GenericModal from './GenericModal'

const styles = {
  button: "bg-custom-blue text-white text-sm font-bold uppercase px-6 py-3 rounded w-full max-w-xs",
}

const ClaimedNftModal = ({  setShowModal, showModal, onConfirm }) => {
  const router = useRouter()

  if (showModal) {
    return (
      <GenericModal heading={"Congratulations! NFT claimed on HashCase"}  setshowModal={setShowModal} onClose={() => router.push('/user/myNfts')}>
        <div className='w-full'>
          {/* <h1 className='w-full break-words text-sm'>Transaction Hash: {transactionHash}</h1> */}
          <div className='mt-12 flex items-center justify-center'>
            <button
              onClick={() => {
                console.log(onConfirm);
                if (onConfirm) {
                  onConfirm();
                }
              }}
              className={styles.button}>
              View My NFTs
            </button>

          
          </div>

          <div className='mt-2 flex items-center justify-center'>
          <a
                                            target={'_blank'}
                                            href={getIntentByNFTId(1)}
                                            className={
                                                'rounded-md px-4 py-2 text-center text-white text-lg bg-sky-600 w-1/3'
                                            }>
            <div className='flex items-center w-full  gap-x-4 justify-center '>
                                                <img src='/icons/twitter.png' alt='twitter' className='relative w-6 h-6' /> Share
                                            </div>
            </a>

          
          </div>
        </div>

        
      </GenericModal>
    );
  } else return <div></div>;
}

export default ClaimedNftModal
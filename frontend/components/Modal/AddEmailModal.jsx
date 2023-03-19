import React, { useContext, useState } from 'react';
import { StoreContext } from '../../utils/Store';
import GenericModal from './GenericModal';
import { addEmail } from '../../utils/user';
import LoadingModal from './LoadingModal';
import { useRouter } from 'next/router';

const styles = {
  label: "block text-gray-300 text-sm font-bold mb-2",
  input: "px-3 py-3 placeholder-gray-400 text-gray-100 bg-transparent border-[1px] border-gray-500 text-sm shadow focus:outline-none focus:ring w-full",
  button: "bg-custom-blue text-white text-sm font-bold uppercase px-6 py-3 rounded w-full max-w-xs",
}

export default function AddEmailModal({ showModal, setshowModal }) {
  const router = useRouter()
  const { state, dispatch } = useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const addEmailHandler = async () => {
    setLoading(true);
    const addEmailSuccess = await addEmail(dispatch, state, email, password, confirmPassword);
    if (addEmailSuccess) {
      setshowModal(false);
    } else {
      console.log("failed to add email");
    }
    setLoading(false);
  }

  if (showModal)
    return (
      <>
        <GenericModal heading={"Sign In Please!"} setshowModal={setshowModal}>
        <div className='flex'>
        <div className='mx-5'>
          <button className={styles.button} onClick={()=>{router.push('/banksignin')}}>
            BANK
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={()=>{router.push('/msmesignin')}}>
            MSME
          </button>
        </div>
        </div>
        </GenericModal>
        <LoadingModal showModal={loading} />
      </>
    );
  else return <></>;
}



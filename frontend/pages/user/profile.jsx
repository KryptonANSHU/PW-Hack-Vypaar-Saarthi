import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../utils/Store";
import axios from "axios";
import UserLayout from "../../components/layouts/UserLayout";
import queryString from "query-string";
import Cookies from "js-cookie";
import notify from "../../utils/notify";
import { connectToMetamask } from "../../utils/user";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Profile() {
  const { state, dispatch } = useContext(StoreContext);
  const [username, setUsername] = useState(
    state?.user?.username ? state.user.username : ""
  );
  const [email, setEmail] = useState(
    state?.user?.email ? state.user.email : ""
  );
  const [wallet, setWallet] = useState(
    state?.user?.wallet_address ? state.user.wallet_address : ""
  );
  const [bio, setBio] = useState(state?.user?.bio ? state.user.bio : "");
  const [edit, setEdit] = useState(true)
  const [buttonState, setButtonState] = useState('Edit Details')

  const metaMaskLoginHandler = async () => {
    const connectSuccessful = await connectToMetamask(dispatch);
  };


  const saveChangesHandler = async () => {
      if (buttonState === "Edit Details") {
        setEdit(false)
        setButtonState("Save Changes")
      }
      else if(buttonState === "Save Changes"){
      if (username != state?.user?.username && username.length > 0) {
        try {
          const { data } = await axios.patch(
            `${process.env.API}/user/updateUsername`,
            {
              username,
            }
          );
          const updatedUser = {
            ...state.user,
            username,
          };
  
          dispatch({
            type: 'SET_USER',
            payload: updatedUser
          })
          setButtonState('Edit Details')
          setEdit(true)
          notify("Updated username successfully", "success");
          Cookies.set("user", JSON.stringify(updatedUser));
        } catch (error) {
          notify("Error updating username", "error");
          console.log("error", error);
        }
      }
      
    }
  };

  // getting the oauth token and calling the twitter api
  const twitterLoginHandler = async () => {
    try {
      const response = await axios.post(
        `${process.env.API}/twitter/oauth/requestToken`
      );

      const { oauth_token } = response.data;
      Cookies.set("twitter-oauth", oauth_token);
      window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${oauth_token}`;
    } catch (error) {
      console.log("error", error);
    }
  };

  // getting access token from the oauth token
  const getAccessToken = async () => {
    const { oauth_token, oauth_verifier } = queryString.parse(
      window.location.search
    );
    if (oauth_token && oauth_verifier) {
      try {
        const { data } = await axios({
          url: `${process.env.API}/twitter/oauth/accessToken`,
          method: "post",
          data: { oauth_token, oauth_verifier },
          headers: {
            oauth_token: Cookies.get("twitter-oauth"),
          },
        });

        const updatedUser = {
          ...state.user,
          twitterId: data.twitter_id,
        };
        var inThirtyMins = new Date(new Date().getTime() + 30 * 60 * 1000);

        // updating state and cookies
        if (data.twitter_id) {
          dispatch({
            type: "SET_USER",
            payload: updatedUser,
            time: inThirtyMins,
          });

          Cookies.set("user", JSON.stringify(updatedUser));
          notify("Connected to twitter successfully!", "success");
        }
      } catch (error) {
        notify("error in connecting to twitter", "error");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const runGetAccessToken = () => {
      getAccessToken();
    };
    runGetAccessToken();
  }, []);

  return (
    <UserLayout>
<div className="w-full bg-custom-blue/20 p-8 mx-16 rounded-lg max-w-4xl">
        <div className="w-full flex flex-col gap-4 items-center">
          <div className="w-full">
            <div className="flex justify-between">
              <h1 className="text-3xl font-semibold mb-2">Profile Details</h1>
              <div>
                <button onClick={saveChangesHandler} className='mr-2 border-[1px] px-4 py-3 lg:px-8 text-white text-[14px] border-white '>
                  {buttonState}
                </button>
                {
                  edit ? (<></>) : (<>
                    <button onClick={() => {
                      setEdit(true)
                      setButtonState("Edit Details")
                    }} className='mr-2 border-[1px] px-4 py-3 lg:px-8 text-white text-[14px] border-white '>
                      Cancle
                    </button>
                  </>)
                }
              </div>
            </div>
            <p>You can only sign selected NFTs after admin has approved you to sign.</p>
            <form className="mt-8">
              <div className="w-full flex">
                <div className="flex mb-2 w-full">
                  <div className="py-3 w-full my-3">
                    <label htmlFor="username" className="tracking-wider text-lg">Username</label>
                    <br />
                    <input
                      disabled={edit}
                      placeholder={` ${edit ? 'Disabled' : 'Enter Name..'}`}
                      className={`
                      profile-input w-full py-[16px] px-[20px] my-[8px] outline-0 rounded-xm bg-transparent border-1 border-gray-400
                      ${edit ? 'cursor-not-allowed' : ''} 
                      `}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="username"></input>

                    <br />
                  </div>
                </div>
              </div>
              <div className="w-full flex">
                <div className="flex mb-2 w-full">
                  <div className="py-3 w-full my-3">
                    <label htmlFor="email" className="tracking-wider text-lg">Email</label>
                    <br />
                    <input
                      className={`
                      profile-input w-full py-[16px] px-[20px] my-[8px] outline-0 rounded-xm bg-transparent border-1 border-gray-400
                      ${edit ? 'cursor-not-allowed' : ''} 
                      `}
                      disabled={true}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      name="email"></input>
                    <br />
                  </div>
                </div>
              </div>
              <div className="w-full flex">
                {/* <div className="flex mb-2 w-full">
                  <div className="py-3 w-full my-3">
                    <label htmlFor="address" className="tracking-wider text-lg">Wallet Address</label>
                    <br />
                    <input
                      disabled={edit}
                      placeholder={` ${edit ? 'Disabled' : 'Enter Wallet Address..'}`}
                      className={`
                      profile-input w-full py-[16px] px-[20px] my-[8px] outline-0 rounded-xm bg-transparent border-1 border-gray-400
                      ${edit ? 'cursor-not-allowed' : ''} 
                      `}
                      value={wallet}
                      onChange={(e) => setWallet(e.target.value)}
                      type="text"
                      name="address"></input>
                    <br />
                  </div>
                </div> */}

                <div className="flex mb-2 w-full">
                  <div className="py-3 w-full my-3">
                    <span className="tracking-wider text-lg"> Wallet: &nbsp; </span>
                    {state?.user?.wallet_address ? (
                      <span className="font-semibold">
                        {state.user.wallet_address}
                      </span>
                    ) : (
                      <span>(Wallet not added)

                        <button disabled={edit} className={`border-[1px] px-4 py-2 mx-5 ${edit ? 'cursor-not-allowed' : ''}`} onClick={metaMaskLoginHandler}>
                          {
                            edit ? (<> Disabled </>) : (<> Connect Wallet Now! </>)
                          }
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full flex">
                <div className="flex mb-2 w-full">
                  <div className="py-3 w-full my-3">
                    <label htmlFor="address" className="tracking-wider text-lg">Bio</label>
                    <br />
                    <textarea
                      disabled={edit}
                      rows="6" cols="50"
                      placeholder={` ${edit ? 'Disabled' : 'Talk about what drives you. your intrests and hobbies'}`}
                      className={`
                      profile-input w-full py-[16px] px-[20px] my-[8px] outline-0 rounded-xm bg-transparent border-1 border-gray-400
                      ${edit ? 'cursor-not-allowed' : ''} 
                      `}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      type="textarea"
                      name="bio"></textarea>
                    <br />
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

      <div className="w-full bg-custom-blue/20 p-8 mx-16 rounded-lg max-w-4xl my-10">
        <h1 className="w-full text-3xl font-semibold">Social Connections</h1>
        <p className="w-full mt-2 mb-4">Help collectors verify your account by connecting your social handles </p>
        <div className="twitterConnect flex justify-between  w-[60%] py-5 my-5">
          <div className="flex">
            <TwitterIcon className="relative" fontSize="large" />
            <p className="font-bold mx-5 text-xl">Twitter</p>
          </div>
          <button onClick={twitterLoginHandler} className="border-1 px-6 py-2">
            Connect
          </button>
        </div>
        <div className="InstaConnect flex justify-between  w-[60%] py-5">
          <div className="flex">
            <InstagramIcon className="relative" fontSize="large" />
            <p className="font-bold mx-5 text-xl">Instagram</p>
          </div>
          <button className="border-1 px-6 py-2">
            Connect
          </button>
        </div>
      </div>
    </UserLayout>
  );
}

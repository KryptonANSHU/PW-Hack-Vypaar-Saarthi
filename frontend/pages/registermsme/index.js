import React from "react";
// import AllSteps from "./components/sidenav/allsteps";
// import PanelOne from "./components/planes/panel_1";
// import PanelTwo from "./components/planes/panel_2";
// import PanelThree from "./components/planes/panel_3";
// import PanelFour from "./components/planes/panel_4";
// import ThankYou from "./components/planes/ThankYou";


import PanelFour from "../../components/registerMSME/planes/panel_4"
import PanelThree from "../../components/registerMSME/planes/panel_3"
import PanelTwo from "../../components/registerMSME/planes/panel_2"
import PanelOne from "../../components/registerMSME/planes/panel_1"
import ThankYou from "../../components/registerMSME/planes/ThankYou"
import AllSteps from "../../components/registerMSME/sidenav/allsteps"


import { useState } from "react";
// import { type } from "@testing-library/user-event/dist/type";


export default function Main () {
    
    const [PanelNum, setPanelNum] = useState(1);
   
    // Add-ons state
    // const [addOns, setaddOns] = useState([true, false, true])

    // State for each add_ons

      // State for the add-ons section
 
    // function that updates the status of add-ons


  

    // State for storing usering input data
    const [userData, setUserData] = useState(
        {
            step_1: {
                Name: "e.g. Henok Belachew",
                Email: "e.g. example@gmail.com",
                Phone_Number: "e.g. +251 9546 23",
            },
            step_2: {
                Yearly: false,
                Plan: 0,
                Price: 0,
            },
            step_3: [ false, false, false ]
            

        }
    )

        // function that updates the status of add on on step 3
        function updateStep3 (add1, add2, add3) {

            setUserData(oldData => {
                return {...oldData,
                    step_3: [
                        add1, add2, add3
                    ]}
            })
                    
        }
    


        // functions that updates the step - 1 input data
        function updateStep_1 (newData) {

            setUserData(oldData => {
                return {...oldData,
                    step_1: {
                        Name: newData[0],
                        Email: newData[1],
                        Phone_Number: newData[2]
                    }}
            })
                    
        }

        //  function that updates the selected plan when clicked
         function updatePlan (newPlan, type) {

            setUserData(oldData => {
                return {...oldData,
                    step_2: {
                        ...oldData.step_1,
                        Yearly: type,
                        Plan: newPlan
                    }}
            })  
        }

        // function that changes the type of plan yearly or monthly
        function updateType (newType, plan) {
            setUserData(oldData => {
                return {...oldData,
                    step_2: {
                        ...oldData.step_1,
                        Yearly: newType,
                        Plan: plan
                    }}
            })
        }

    return (

        <>

    <div>
        <div className="w-full h-[28vh] bg-catalogue-background-1 bg-cover flex justify-center items-end">
        <div className="w-full max-w-md flex flex-col items-center p-4">
          <h1 className="text-2xl my-1  arcade-font text-white">Vypaar Saarthi</h1>
          <h1 className="my-1 text-center font-manrope text-xl text-gray-300">
            
          </h1>
        </div>
      </div>

        <div className="main" >
                <AllSteps  PanelNum={PanelNum} />
                
                {PanelNum === 1 && <PanelOne 
                PanelNum={PanelNum} 
                UpdatePanel={setPanelNum}
                name={userData.step_1.Name}
                email={userData.step_1.Email}
                Phone_Number = {userData.step_1.Phone_Number}
                updateStep_1 = {updateStep_1}
                />}

                {PanelNum === 2 && <PanelTwo  
                PanelNum={PanelNum} 
                UpdatePanel={setPanelNum} 
                PlanType = {userData.step_2.Yearly}
                updateType = {updateType}
                planSelected = {userData.step_2.Plan}
                updatePlan = {updatePlan}
                />}

                {PanelNum === 3 && <PanelThree PanelNum={PanelNum} UpdatePanel={setPanelNum}
                selectedAdd = {userData.step_3}
                addonsStatus = {userData.step_3}
                updateStep3 = {updateStep3}
                Yearly = {userData.step_2.Yearly}

                />}

                {PanelNum === 4 && <PanelFour PanelNum={PanelNum} UpdatePanel={setPanelNum}
                selectedPlan = {userData.step_2.Plan}
                Yearly = {userData.step_2.Yearly}
                addOnStatus = {userData.step_3}
                />}
                {PanelNum === 5 && <ThankYou/>}
                
        </div>
        </div>
        </>
        
    )
}
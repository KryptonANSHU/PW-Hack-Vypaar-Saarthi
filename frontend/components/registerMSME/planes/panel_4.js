import React from "react";
// import "./panel.css"
// importing all plans info
import Plans from "./plansdata";

// getting the details of the add ons
import addonData from "./addonData";

export default function panel_4(props) {

    const step_1 = [];

    function setName(event) {
      step_1[0] = event.target.value;
    }
  
    function setEmail(event) {
      step_1[1] = event.target.value;
    }
  
    function setPhone(event) {
      step_1[2] = event.target.value;
    }
  
    function setPan(event) {
      step_1[2] = event.target.value;
    }
    function setAdhaar(event) {
      step_1[2] = event.target.value;
    }
  const add0 = props.addOnStatus[0]
    ? props.Yearly
      ? addonData[0].yrPrice
      : addonData[0].monPrice
    : 0;
  const add1 = props.addOnStatus[1]
    ? props.Yearly
      ? addonData[1].yrPrice
      : addonData[1].monPrice
    : 0;

  const add2 = props.addOnStatus[2]
    ? props.Yearly
      ? addonData[2].yrPrice
      : addonData[2].monPrice
    : 0;

  const planPrice = props.Yearly
    ? Plans[props.selectedPlan].yearly
    : Plans[props.selectedPlan].monthly;

  console.log(add1);

  function ChangePanel() {
    props.UpdatePanel(props.PanelNum + 1);
  }
  function goBack() {
    props.UpdatePanel(props.PanelNum - 1);
  }

  function updatetopanel2() {
    props.UpdatePanel(2);
  }
  return (
    <div className="panel-4 panel">
       <div className="form border-b-2">
        <h2>Some Extra Metrics</h2>
        <p> </p>

        <div className="fields w-[90%] flex ">
          <div className="left w-1/2 mx-3">
            <label>
              <span className="upperField">
                <span>Exact Location</span>
                <span className="required">This field is required</span>
              </span>
              <textarea onChange={setName} className="textarea" placeholder="e.g Shavige Malleshwara Hills, 91st Main Rd, 1st Stage, Kumaraswamy Layout, Bengaluru" rows="5" cols="70"/>
            </label>
            <label>
              <span className="upperField">
                <span> Instagram Account Link</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setName}
                placeholder="e.g @AgrawalCycle"
                type="text"
              />
            </label>
            <label>
              <span className="upperField">
                <span>Twitter Account Link</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setName}
                placeholder="e.g @AgrawalCycle"
                type="text"
              />
            </label>
          </div>
          <div className="right w-1/2 mx-3">
        
          <label>
              <span className="upperField">
                <span>Upload Work Experience (Kaushal Work Certificate/ Certificate from previous Employer)</span>
                <span className="required">This field is required</span>
              </span>
              <input onChange={setName} placeholder={props.name} type="file" />
            </label>
          </div>
        </div>
      </div>

      

      <div className="low-btns">
        <span onClick={goBack}>Go Back</span>
        <button onClick={ChangePanel} id="btn">
          Confirm
        </button>
      </div>
    </div>
  );
}

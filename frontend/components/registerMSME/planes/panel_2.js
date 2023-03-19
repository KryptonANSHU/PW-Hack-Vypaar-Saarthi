import React from "react";
// import { useState } from "react";
// import "./panel.css"

export default function Panel_1(props) {
  // Changing panels
  function ChangePanel() {
    props.UpdatePanel(props.PanelNum + 1);
    updateStep_1();
  }

  // Getting the value of the user data fron input fields
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

  // Passing the user data to the parent states

  function updateStep_1() {
    if (step_1[0] !== undefined) {
      props.updateStep_1(step_1);
    }
  }
  function ChangePanel() {
    // props.updateStep3(true, true, true)

    props.UpdatePanel(props.PanelNum + 1);
  }
  function goBack() {
    props.UpdatePanel(props.PanelNum - 1);
  }
  return (
    <div className="panel-1 panel">
      <div className="form">
        <h2>Account Related Info</h2>
        <p>
          {" "}
          Please provide your Personal and Business Account Related Information
        </p>

        <div className="fields w-[90%] flex mt-5 border-b-2 p-5">
          <div className="left w-1/3 mx-3 ">
            <label>
              <span className="upperField">
                <span>Upload Your Last 2 year ITR</span>
                <span className="required">This field is required</span>
              </span>
              <input onChange={setName} placeholder={props.name} type="file" />
            </label>
          </div>
          <div className="left w-1/3 mx-3">
            <label>
              <span className="upperField">
                <span>Gross Income</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setName}
                placeholder={props.name}
                type="number"
              />
            </label>
          </div>
          <div className="left w-1/3 mx-3">
            <label>
              <span className="upperField">
                <span>Gross Turnover</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setName}
                placeholder={props.name}
                type="number"
              />
            </label>
          </div>
        </div>

        <div className="fields w-[90%] flex mt-5 border-b-2 p-5">
          <div className="">
            <div className="left mx-3 ">
              <label>
                <span className="upperField">
                  <span>Udyam registration No</span>
                  <span className="required">This field is required</span>
                </span>
                <input
                  onChange={setName}
                  placeholder={props.name}
                  type="text"
                />
              </label>
            </div>
            <div className="left mx-3">
              <label>
                <span className="upperField">
                  <span>GST Registration No</span>
                  <span className="required">This field is required</span>
                </span>
                <input
                  onChange={setName}
                  placeholder={props.name}
                  type="number"
                />
              </label>
            </div>
          </div>

          {/* <div>
            <div className="left  mx-3 ">
              <label>
                <span className="upperField">
                  <span>Upload Your Last 2 year ITR</span>
                  <span className="required">This field is required</span>
                </span>
                <input
                  onChange={setName}
                  placeholder={props.name}
                  type="file"
                />
              </label>
            </div>
            <div className="left  mx-3">
              <label>
                <span className="upperField">
                  <span>Gross Income</span>
                  <span className="required">This field is required</span>
                </span>
                <input
                  onChange={setName}
                  placeholder={props.name}
                  type="number"
                />
              </label>
            </div>
            <div className="left  mx-3">
              <label>
                <span className="upperField">
                  <span>Gross Turnover</span>
                  <span className="required">This field is required</span>
                </span>
                <input
                  onChange={setName}
                  placeholder={props.name}
                  type="number"
                />
              </label>
            </div>
          </div> */}
        </div>
      </div>

      <div className="low-btns">
        <span onClick={goBack}>Go Back</span>
        <button onClick={ChangePanel} id="btn">
          Next Step
        </button>
      </div>
    </div>
  );
}

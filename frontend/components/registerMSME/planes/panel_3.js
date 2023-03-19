import React, { useState } from "react";
// import "./panel.css"
import AddOns from "./add-on";
import plansdata from "./plansdata";
import Plan from "./plan";
import addonData from "./addonData";
import Panel_2 from "./panel_2";
import { MenuItem, Select } from "@mui/material";

export default function panel_3(props) {
  const handleChange = (event) => {
    setSector(event.target.value);
  };
  const [sector, setSector] = useState([]);
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


  let theStatus = false;
  if (props.id === 1) {
    theStatus = props.addons1;
  } else if (props.id === 2) {
    theStatus = props.addons2;
  } else if (props.id === 3) {
    theStatus = props.addons3;
  }
  const addons = addonData.map((item) => {
    return (
      <AddOns
        addons={theStatus}
        id={item.id}
        selected={item.selected}
        feature={item.feature}
        discription={item.discription}
        userData={addonData}
        // passing necessesary states and their methods

        addons1={props.addons1}
        addons2={props.addons2}
        addons3={props.addons3}
        // passing the state of each add-ons
        onlineService={props.onlineService}
        largeStorage={props.largeStorage}
        customProfile={props.customProfile}
        // passing state methods of each add-ons state

        setOnline={props.setOnline}
        setLarge={props.setLarge}
        setCustom={props.setCustom}
        // addOns = {props.addOns}
        Yearly={props.Yearly}
        addonsStatus={props.addonsStatus}
        updateStep3={props.updateStep3}
      />
    );
  });

  console.log(props.Data);

  function ChangePanel() {
    // props.updateStep3(true, true, true)

    props.UpdatePanel(props.PanelNum + 1);
  }
  function goBack() {
    props.UpdatePanel(props.PanelNum - 1);
  }
  return (
    <div className="panel-3 panel">
      <div className="form">
        <h2>Business Sector</h2>
        <p>Select your business Sector</p>

        <div className="add-ons">{addons}</div>

        <div className="fields w-[90%] flex mt-10">
          <div className="left w-1/2 mx-3">
            <label>
              <span className="upperField">
                <span> Description of your Business</span>
                <span className="required">This field is required</span>
              </span>
              <textarea onChange={setName} className="textarea" placeholder="Give a brief Description of your business" rows="4" cols="70"/>
            </label>
            <label>
              <span className="upperField">
                <span>Age Of your Business (In Months)</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setEmail}
                placeholder={props.email}
                type="email"
              />
            </label>

          </div>
          <div className="right w-1/2 mx-3">
          <label>
              <span className="upperField">
                <span>Business Type</span>
                <span className="required">This field is required</span>
              </span>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sector}
                label="Sectore"
                onChange={handleChange}
              >
                <MenuItem value={10}>Candle & Wax Product Making</MenuItem>
                <MenuItem value={20}>Spices manufacturing</MenuItem>
                <MenuItem value={30}>Fruit juice extraction, processing, and packaging</MenuItem>
                <MenuItem value={40}>Incense Stick and Camphor Manufacturing</MenuItem>
                <MenuItem value={50}>Pickles and Papad</MenuItem>
                <MenuItem value={60}>Bakery and Chocolates</MenuItem>
                <MenuItem value={70}>Soap Production</MenuItem>
                <MenuItem value={80}>Small toys manufacturing</MenuItem>
                <MenuItem value={90}>Handloom and Handicrafts</MenuItem>
                <MenuItem value={100}>Paper packaging</MenuItem>
                <MenuItem value={110}>Stationery</MenuItem>
                <MenuItem value={120}>Leather product manufacturing </MenuItem>
                <MenuItem value={130}>Beauty parlors</MenuItem>
                <MenuItem value={140}>Salon/ Hair Dressor</MenuItem>
                <MenuItem value={150}>Snacks and Fast Foods</MenuItem>
                <MenuItem value={160}>Restraunts and Hotels</MenuItem>
              </Select>
            </label>
          </div>
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

import React, { useState } from "react";
// import { useState } from "react";
// import "./panel.css"
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

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

  function setPan(event) {
    step_1[2] = event.target.value;
  }
  function setAdhaar(event) {
    step_1[2] = event.target.value;
  }

  // Passing the user data to the parent states

  function updateStep_1() {
    if (step_1[0] !== undefined) {
      props.updateStep_1(step_1);
    }
  }

  const handleChange = (event) => {
    setState(event.target.value);
  };
  const handleChange2 = (event) => {
    setCity(event.target.value);
  };

  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  return (
    <div className="panel-1 panel">
      <div className="form">
        <h2>Entreprenuer Info</h2>
        <p> Please provide your name, email address,phone number, and Adhaar</p>

        <div className="fields w-[90%] flex">
          <div className="left w-1/2 mx-3">
            <label>
              <span className="upperField">
                <span> Name</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setName}
                placeholder="e.g Vivek Sharma"
                type="text"
              />
            </label>
            <label>
              <span className="upperField">
                <span>Email</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setEmail}
                placeholder={props.email}
                type="email"
              />
            </label>
            <label>
              <span className="upperField">
                <span>Phone Number</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setPhone}
                placeholder={props.Phone_Number}
                type="number"
              />
            </label>
            <label>
              <span className="upperField">
                <span>Do you have Prior Experience Running a Business?</span>
                <span className="required">This field is required</span>
              </span>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                row
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="No"
                />
                
              </RadioGroup>
            </label>
          </div>
          <div className="right w-1/2 mx-3">
            <label>
              <span className="upperField">
                <span>Pan Number</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setPhone}
                placeholder="e.g GAV23LL7"
                type="number"
              />
            </label>
            <label>
              <span className="upperField">
                <span>ADHAAR Number</span>
                <span className="required">This field is required</span>
              </span>
              <input
                onChange={setPhone}
                placeholder="e.g 1233-9877-4510"
                type="number"
              />
            </label>
            <label>
              <span className="upperField">
                <span>State</span>
                <span className="required">This field is required</span>
              </span>
              <Select
                labelId="demo-select-smalll"
                id="demo-select-small"
                value={state}
                label="State"
                onChange={handleChange}
              >
                <MenuItem value={10}>Uttar Pradesh</MenuItem>
                <MenuItem value={20}>Bihar</MenuItem>
                <MenuItem value={30}>Orissa</MenuItem>
                <MenuItem value={40}>Jharkhand</MenuItem>
                <MenuItem value={50}>Jammu Kashmir</MenuItem>
                <MenuItem value={60}>Haryana</MenuItem>
                <MenuItem value={70}>Punjab</MenuItem>
                <MenuItem value={80}>Karnataka</MenuItem>
                <MenuItem value={90}>Tamil Nadu</MenuItem>
                <MenuItem value={100}>Kerela</MenuItem>
                <MenuItem value={110}>Andhra Pradesh</MenuItem>
                <MenuItem value={120}>Sikkim</MenuItem>
                <MenuItem value={130}>Arunachal Pradesh</MenuItem>
                <MenuItem value={140}>Madhya Pradesh</MenuItem>
                <MenuItem value={150}>Gujrat</MenuItem>
              </Select>
            </label>
            <label>
              <span className="upperField">
                <span>City</span>
                <span className="required">This field is required</span>
              </span>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={city}
                label="City"
                onChange={handleChange2}
              >
                <MenuItem value={10}>Kanpur</MenuItem>
                <MenuItem value={20}>Lucknow</MenuItem>
                <MenuItem value={30}>Varanasi</MenuItem>
                <MenuItem value={40}>Pryagraj</MenuItem>
                <MenuItem value={50}>Bareily</MenuItem>
                <MenuItem value={60}>Gorakhpur</MenuItem>
                <MenuItem value={70}>Firozabad</MenuItem>
                <MenuItem value={80}>Jhansi</MenuItem>
                <MenuItem value={90}>Mathura</MenuItem>
                <MenuItem value={100}>Shahjahnpur</MenuItem>
                <MenuItem value={110}>Rampur</MenuItem>
                <MenuItem value={120}>Agra</MenuItem>
                <MenuItem value={130}>Faizabad</MenuItem>
                <MenuItem value={140}>Meerut</MenuItem>
                <MenuItem value={150}>Ghaziabad</MenuItem>
              </Select>
            </label>
          </div>
        </div>
      </div>

      <div className="low-btns">
        <span></span>
        <button onClick={ChangePanel} id="btn">
          Next Step
        </button>
      </div>
    </div>
  );
}

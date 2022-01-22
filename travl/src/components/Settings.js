import React from 'react';
//import React, { Component } from "react";
//import Switch from "react-switch";


function Settings() {
    return (
        <div id='settings' className="notifications">
            
            <h2>Settings</h2>
        
            <p>location on</p>
            <button></button>
            {/* <div className="toggleWrapper">
            <input type="checkbox" name="toggle1" className="mobileToggle" id="toggle1" checked/>
        <label for="toggle1"></label>
        </div> */}
        {/* <Switch {...label} defaultChecked />
<Switch {...label} /> */}
            <p>notification on</p>
            <button></button>

            <button type='dropdown'>notification radius</button>
            
        </div>
    )
}

const Setting = ({ isOn, handleToggle }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };

  <label
//   style={{ background: isOn && '#06D6A0' }}
  className="react-switch-label"
  htmlFor={`react-switch-new`}
></label>

export default Settings;
// export function Setting ()

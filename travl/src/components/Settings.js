import React from 'react';
import icon from '../icons/settings_icon.svg';
import logo from '../icons/mini_logo.svg';
import miniProfile from '../icons/top_miniprofile_icon.svg';
import miniSettings from '../icons/top_minisettings_icon.svg';
import { NavLink } from 'react-router-dom';
//import React, { Component } from "react";
//import Switch from "react-switch";


// function Settings() {
//     return (
//         <div id='settings' className="notifications">
            
//             <h2>Settings</h2>
        
//             <p>location on</p>
//             <button></button>
//             <p>notification on</p>
//             <button></button>

//             <button type='dropdown'>notification radius</button>
            
//         </div>
//     )
// }

const Setting = ({ isOn, handleToggle }) => {
    return (
      <>
      
      <div className='main-icon'>
      {/* <div className='circle'></div> */}
        <img src={icon} id="settings-icon" alt="settings icon" />
        <img src={logo} className="Travl-logo" alt="logo" /> 
        <img src={miniProfile} id="icon-bar-1" alt="profile bar" />
        <img src={miniSettings} id="icon-bar-2" alt="profile bar" />
      </div>
      <form className='settings-form'>
      <div className='main-settings'>
      

        <div className='settings'>location on
        <input className='toggle'
          checked={isOn}
          onChange={handleToggle}
          className='location-switch-checkbox'
          id={`location-switch-new`}
          type="checkbox"
        />
        <label
          className="location-switch-label"
          htmlFor={`location-switch-new`}
        >
          <span className={`location-switch-button`} />
        </label>
        </div>
        
        <form className='radius'>
        <div className='settings-dropdown'>
        <label for='dropdown'>notification radius</label> 
        <select className='dropdown' id='radius'>
        <option disabled selected value> </option>
        <option value='0.25 mile'>0.25 mile</option>
        <option value='1 mile'>1 mile</option>
        <option value='5 miles'>5 miles</option>
        <option value='10 miles'>10 miles</option>
        <option value='25 miles'>25 miles</option>
        </select>
        {/* <br></br>
        <input type='submit' value='submit'>Submit</input> */}
        </div>
        </form>
        

        <div className='settings'>notification on
        <input className='toggle'
          checked={isOn}
          onChange={handleToggle}
          className="notification-switch-checkbox"
          id={`notification-switch-new`}
          type="checkbox"
        />
        <label
          className="notification-switch-label"
          htmlFor={`notification-switch-new`}
        >
          <span className={`notification-switch-button`} />
        </label>
        </div>
       

      </div>
      </form>
      </>
      
      
      
    );
  };

  <label
//   style={{ background: isOn && '#06D6A0' }}
  className="react-switch-label"
  htmlFor={`react-switch-new`}
></label>


export default Setting;
// export function Setting ()

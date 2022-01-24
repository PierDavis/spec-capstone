import React from 'react';
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
      <div className='main-settings'>
        
        <div className='settings'>location on
        <input className='toggle'
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
        </div>
        <div className='settings'>notification on
        <input className='toggle'
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
        </div>
        <div className='settings-dropdown'>
        <button type='dropdown' className='settings'>notification radius</button>
        </div>

      </div>
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

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
      {/* <span className='circle'></span> */}

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
        
        <div className='settings-dropdown'>
        <form className='radius'>
        <label for='dropdown'>notification radius:</label> 
        <select className='dropdown' id='radius'>
         
        <option value='0.25 mile'>0.25 mile</option>
        <option value='1 mile'>1 mile</option>
        <option value='5 miles'>5 miles</option>
        <option value='10 miles'>10 miles</option>
        <option value='25 miles'>25 miles</option>
        </select>
        {/* <br></br>
        <input type='submit' value='submit'>Submit</input> */}
        </form>
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

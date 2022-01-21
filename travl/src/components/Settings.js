// import React from 'react';
import React, { Component } from "react";
import Switch from "react-switch";


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

export default Settings

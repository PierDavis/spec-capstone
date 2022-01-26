import React from 'react';
import icon from '../icons/profile_icon-01.svg';
import logo from '../icons/settings_logo-02.svg';
import iconBar from '../icons/settings_profile_settings_icons-03.svg';


function Profile() {
    return (
    <div class='wrapper'>
        <div class='main'>
            <div className='main-icon'>
            <img src={logo} className="Travl-logo" alt="logo"/> 
            <img src={icon} id="profile-logo" alt="profile icon"/>
            <img src={iconBar} id="icon-bar" alt="profile bar"/>
        </div>
            
    <div className='main-settings'>
        <div id='container' className="red">
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
            <div className="circlea"></div>
        </div> 
    </div>
    <h2>text</h2>
</div>
</div> 

    
    )
}

export default Profile

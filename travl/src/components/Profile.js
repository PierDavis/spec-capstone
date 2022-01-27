import React from 'react';
import icon from '../icons/profile_icon-01.svg';
import logo from '../icons/settings_logo-02.svg';
import iconBar from '../icons/settings_profile_settings_icons-03.svg';
import globe from '../icons/globe_icon_small-05.png';
import pen from '../icons/pen_icon_small-05.png';
import tags from '../icons/tags_icon_small-05.png';


function Profile() {
    return (
    <div className='wrapper'>
        <div className='main'>
            <div className='main-icon'>
            <img src={logo} className="Travl-logo" alt="logo"/> 
            <img src={icon} id="profile-logo" alt="profile icon"/>
            <img src={iconBar} id="icon-bar" alt="profile bar"/>
            </div>
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
    <div className='footer-bar'>
            <img src={globe} className="globe-icon" alt="globe icon"/> 
            <img src={pen} className="pen-icon" alt="pen icon"/>
            <img src={tags} className="tags-icon" alt="tags icon"/>
    </div>
</div>

    )
}

export default Profile

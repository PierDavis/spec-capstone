import React from 'react';
import icon from '../icons/profile_icon-01.svg';
import logo from '../icons/settings_logo-02.svg';
import iconBar from '../icons/settings_profile_settings_icons-03.svg';


function Profile() {
    return (
        <div>
            <div className='circle'>
      {/* <div className='circle'></div> */}
      <img src={icon} className="profile-logo" alt="profile icon" />
       <img src={logo} className="Travl-logo" alt="logo" /> 
       <img src={iconBar} className="icon-bar" alt="profile bar" />
            </div>

      <div className='main-settings'></div> 
        </div>
    )
}

export default Profile

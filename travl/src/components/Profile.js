import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import icon from '../icons/profile_icon.svg';
import logo from '../icons/mini_logo.svg';
import miniProfile from '../icons/top_miniprofile_icon.svg';
import miniSettings from '../icons/top_minisettings_icon.svg';
import globe from '../icons/globe_icon_small.svg';
import pen from '../icons/pen_icon_small.svg';
import tags from '../icons/tags_icon_small.svg';




function Profile() {
    const [pointOne, setPoint] = useState([])
    function getInfoFromDB(){
        console.log(localStorage.getItem('id'))
        axios.get(`http://localhost:4000/getInfo/${localStorage.getItem('id')}`)
        .then(res => setPoint(res.data[0][0])) 
    }
    
    console.log(pointOne)
    useEffect(() => {
        getInfoFromDB()
      }, [])

      
    return (
    <div className='wrapper'>
        
            <div className='profile-page-icons'>
            
            <img src={logo} className="Travl-logo" alt="logo"/> 
            <img src={icon} id="profile-icon" alt="profile icon"/>
            <div id='username'><p>'username'
            {pointOne.username} </p> </div>

            <img src={miniProfile} id="profile-icon-bar-1" alt="profile icon" />
            {/* <a href='/settings' className='settings-container'> */}
            <img src={miniSettings} id="profile-icon-bar-2" alt="settings icon" />
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
            <NavLink id='globe-container' to='/mappage'>
            <img src={globe} 
            className="globe-icon" alt="globe icon"/> 
            </NavLink>
            <NavLink id='pen-container' to='/addpoint'>
            <img src={pen} className="pen-icon" alt="pen icon"/>
            </NavLink>
            <NavLink id='tags-container' to='/categories'><img src={tags} className="tags-icon" alt="tags icon"/>
            </NavLink>
    </div>
</div>
    )
}



export default Profile

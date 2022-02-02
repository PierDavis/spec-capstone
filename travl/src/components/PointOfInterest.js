import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import point from '../icons/point_icon.svg';
import logo from '../icons/mini_logo.svg';
import miniProfile from '../icons/top_miniprofile_icon.svg';
import miniSettings from '../icons/top_minisettings_icon.svg';
import globe from '../icons/globe_icon_small.svg';
import pen from '../icons/pen_icon_small.svg';
import tags from '../icons/tags_icon_small.svg';



function PointOfInterest() {
    const [pointOne, setPoint] = useState([])
    function getInfoFromDB(){
        console.log(localStorage.getItem('id'))
        axios.get(`http://localhost:4000/getInfo/${localStorage.getItem('id')}`)
        .then(res => setPoint(res.data[0][4]))    
    }
    console.log(pointOne)
    useEffect(() => {
        getInfoFromDB()
      }, [])

    return <div className="selectedPoint">
        
        <div>
            <div className='main-icon'>
            <img src={logo} className="Travl-logo" alt="logo"/> 
            <img src={point} id="point-icon" alt="profile icon"/>
            <img src={miniProfile} id="icon-bar-1" alt="profile bar" />
            <img src={miniSettings} id="icon-bar-2" alt="profile bar" />
            </div>
        </div>

        <form id='point-of-interest-form'>
        <div id='point-container' className="blue">
            <div id='point-name' className="point-name">
                {/* point of interest */}
                {pointOne.title}
            </div>

            <div id='location_coordinates' className="point-location">
                {/* point of interest location */}
                {pointOne.coordinates}
            </div>

            <div id='point-category' className="point-category">
                {/* point category */}
                {pointOne.category_id}
            </div>

            <div id='point-notes' className="point-notes">
                {/* point of interest notes */}
                {pointOne.notes}
            </div>
            
            <div className="circleb">
            <img src={pointOne.photo} className='poi-image'></img>
            </div>
            </div>
    
        
        </form>
    
    <div className='footer-bar'>
            <img src={globe} className="globe-icon" alt="globe icon"/> 
            <img src={pen} className="pen-icon" alt="pen icon"/>
            <img src={tags} className="tags-icon" alt="tags icon"/>
    </div>
    </div>;
    
}



export default PointOfInterest;

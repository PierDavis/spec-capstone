//PointOfInterest.js test below

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
        .then(res => setPoint(res.data[0][0]))    
    }
    console.log(pointOne)
    useEffect(() => {
        getInfoFromDB()
      }, [])

    return <div className="selectedPoint">
        
        <div>
            <div className='main-icon'>
            <img src={logo} className="Travl-logo" alt="logo"/> 
            <NavLink id='test' to='/profile'>
            <img src={point} id="point-icon" alt="profile icon"/>
            </NavLink>
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
    </div>;
    
}

export default PointOfInterest;

//Profile.js mapping and show logged in user test below

class WelcomePage extends Component {
    render() {
 
       const { auth } = this.props
 
       var pageTitle = `Welcome, { auth.firstname }`
 
       return (
          <h1>{ pageTitle }</h1>
       )
   }
 }
 
 export default WelcomePage

 
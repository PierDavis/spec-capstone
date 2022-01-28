import React from 'react';
import icon from '../icons/category_icon.svg';
import logo from '../icons/mini_logo.svg';
import miniProfile from '../icons/top_miniprofile_icon.svg';
import miniSettings from '../icons/top_minisettings_icon.svg';
import globe from '../icons/globe_icon_small.svg';
import pen from '../icons/pen_icon_small.svg';
import tags from '../icons/tags_icon_small.svg';
import sights from '../icons/category_sights_icons.svg';
import food from '../icons/category_food_icons.svg';
import arch from '../icons/category_arch_icons.svg';
import active from '../icons/category_active_icons.svg';
import hist from '../icons/category_hist_icons.svg';

function Categories() {
    return (
        <div className='wrapper'>
            <div className='main'>
                <div className='category-icons'>
                <img src={logo} className="Travl-logo" alt="logo"/> 
                <img src={icon} id="category-icon" alt="category icon"/>
                <img src={miniProfile} id="icon-bar-1" alt="profile bar" />
                <img src={miniSettings} id="icon-bar-2" alt="profile bar" />
                </div>

            </div>
        <div className='category-bar'>
                <img src={sights} className="sights-icon" alt="globe icon"/> 
                <img src={food} className="food-icon" alt="pen icon"/>
                <img src={arch} className="arch-icon" alt="tags icon"/>
                <img src={active} className="active-icon" alt="tags icon"/>
                <img src={hist} className="hist-icon" alt="tags icon"/>
        </div>        
        <div className='main-settings'>
            <div id='container' className="orange">
                <div className="circlec"></div>
                <div className="circlec"></div>
                <div className="circlec"></div>
                <div className="circlec"></div>
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

export default Categories;

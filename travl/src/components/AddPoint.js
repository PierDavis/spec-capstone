import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import icon from '../icons/pen_icon.svg';
import logo from '../icons/mini_logo.svg';
import miniProfile from '../icons/top_miniprofile_icon.svg';
import miniSettings from '../icons/top_minisettings_icon.svg';
import globe from '../icons/globe_icon_small.svg';
import pen from '../icons/pen_icon_small.svg';
import tags from '../icons/tags_icon_small.svg';



function AddPoint(props) {
    let navigate = useNavigate();
    const initialValues = {
        pointName: "",
        location: "",
        category: "",
        imageUpload: "",
        link: "",
        notes: "",
        id: localStorage.getItem('id')
    }
    const onSubmit = (values) => {
        axios.post('http://localhost:4000/addpoint', values)
        // console.log(values)
        .then((res) => {
            console.log(res.data)
          
            props.logFunction()
            navigate('/pointofinterest')
        })
        .catch((err) => console.log(err.response.data))
    }
    const validate = (values) => {
        // console.log('validation')
        const errors = {}
        if(!values.pointName) {
            errors.pointName = "Please name your new point of interest"
        }
        if(!values.location) {
            errors.location = "Please enter a location"
        }
        if(!values.category) {
            errors.name = "Please select a category"
        }
        return errors
    }
        

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
})
    function navToPOI(){
        navigate('/pointofinterest')
    }

    return <div className="main-point">
        
        <div className='main'>
            <div className='main-icon'>
            <img src={logo} className="Travl-logo" alt="logo"/> 
            <NavLink to='/profile'>
            <img src={icon} id="pen-icon" alt="profile icon"/>
            </NavLink>
            <img src={miniProfile} id="icon-bar-1" alt="icon bar" />
            <img src={miniSettings} id="icon-bar-2" alt="icon bar"
            />
            </div>
        </div>

        <form id='add-point-form' onSubmit={formik.handleSubmit}>
         {/* <div className='point-form-group'>  */}
         <input 
         id='point-name'
         type="text"
         className="add-point"
         name="pointName"
         onChange={formik.handleChange}
         value={formik.values.pointName}
         placeholder='new point of interest'
         />
         
         <input 
         id="location-coordinates"
         type="text"
         className="add-point"
         name="location"
         onChange={formik.handleChange}
         value={formik.values.location}
         placeholder='location'
         />
         
         {/* <input 
         type="text"
         className="add-point"
         name="category"
         onChange={formik.handleChange}
         value={formik.values.category}
         placeholder='category'
         /> */}

        <div className='categories'>
        <label for='dropdown'>category</label> 
        <select name='category' className='category-dropdown' id='categories'
        onChange={formik.handleChange}
        value={formik.values.category}>
        <option defaultValue> </option>
        <option value='1'>sightseeing</option>
        <option value='2'>food and drink</option>
        <option value='3'>architecture</option>
        <option value='4'>active</option>
        <option value='5'>historical</option>
        </select>
        </div>

         <input 
         type="text"
         className="add-point"
         name="imageUpload"
         onChange={formik.handleChange}
         value={formik.values.imageUpload}
         placeholder='image link upload'
         />
         
         <input 
         type="text"
         className="add-point"
         name="link"
         onChange={formik.handleChange}
         value={formik.values.link}
         placeholder='reference link'
         />
         
         <input 
         type="text"
         className="add-point"
         name="notes"
         onChange={formik.handleChange}
         value={formik.values.notes}
         placeholder='notes'
         />
        

        <div className='save-button'> <button type='submit' disabled={!formik.isValid}>save</button></div>
    </form>

    <div>
        {formik.errors.pointName ? <div>{formik.errors.pointName}</div> : null}
        {formik.errors.location ? <div>{formik.errors.location}</div> : null}
        {formik.errors.category ? <div>{formik.errors.category}</div> : null}
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
    </div>;
    
}

export default AddPoint
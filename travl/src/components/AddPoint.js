import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
        imageFileUpload: "",
        link: "",
        notes: ""
    }
    const onSubmit = (values) => {
        axios.post('http://localhost:4000/addpoint', values)
        console.log(values)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('pointName', res.data[0][0].point_name)
            localStorage.setItem('location', res.data[0][0].location)
            localStorage.setItem('category', res.data[0][0].category)
            localStorage.setItem('imageFileUpload', res.data[0][0].imageFileUpload)
            localStorage.setItem('link', res.data[0][0].link)
            localStorage.setItem('notes', res.data[0][0].notes)
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

    return <div className="main-point">
        
        <div className='main'>
            <div className='main-icon'>
            <img src={logo} className="Travl-logo" alt="logo"/> 
            <img src={icon} id="pen-icon" alt="profile icon"/>
            <img src={miniProfile} id="icon-bar-1" alt="icon bar" />
            <img src={miniSettings} id="icon-bar-2" alt="icon bar" />
            </div>
        </div>

        <form id='add-point-form' onSubmit={formik.handleSubmit}>
         {/* <div className='point-form-group'>  */}
         <input 
         id='point-name'
         type="text"
         className="add-point"
         name="addPoint"
         onChange={formik.handleChange}
         value={formik.values.firstName}
         placeholder='new point of interest'
         />
         
         <input 
         id="location-coordinates"
         type="text"
         className="add-point"
         name="location"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         placeholder='location'
         />
         
         <input 
         type="text"
         className="add-point"
         name="category"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder='category'
         />
         
         <input 
         type="text"
         className="add-point"
         name="imageFileUpload"
         onChange={formik.handleChange}
         value={formik.values.username}
         placeholder='image file upload'
         />
         
         <input 
         type="text"
         className="add-point"
         name="link"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='link'
         />
         
         <input 
         type="text"
         className="add-point"
         name="notes"
         onChange={formik.handleChange}
         value={formik.values.password}
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
            <img src={globe} className="globe-icon" alt="globe icon"/> 
            <img src={pen} className="pen-icon" alt="pen icon"/>
            <img src={tags} className="tags-icon" alt="tags icon"/>
    </div>
    </div>;
    
}

export default AddPoint
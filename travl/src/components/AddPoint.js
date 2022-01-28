import React from 'react';
import {useFormik} from 'formik';
import icon from '../icons/pen_icon.svg';
import logo from '../icons/mini_logo.svg';
import miniProfile from '../icons/top_miniprofile_icon.svg';
import miniSettings from '../icons/top_minisettings_icon.svg';
import globe from '../icons/globe_icon_small.svg';
import pen from '../icons/pen_icon_small.svg';
import tags from '../icons/tags_icon_small.svg';

function AddPoint() {
    const initialValues = {
        pointName: "",
        location: "",
        category: "",
        imageFileUpload: "",
        notes: ""
    }
    const onSubmit = (values) => {
        console.log(values)
    }
    const validate = (values) => {
        console.log('validation')
    }
//         if(!values.username) {
//             errors.username = "Username Required"
//         }
//         if(!values.password) {
//             errors.password = "Password Required"
//         }  else if(values.password.length < 8){
//                 errors.password = "Password must be longer than 8 characters."
//         }
//         if(!values.name) {
//             errors.name = "You gotta have a name!"
//         }
//         if(!values.confirmPassword) {
//             errors.confirmPassword = "Please confirm password"
//         }
//         else if(values.password !== values.confirmPassword) {
//             errors.confirmPassword = "Passwords must match"
//         }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
})

    return <div className="main-point">
        
        <div className='main'>
            <div className='main-icon'>
            <img src={logo} className="Travl-logo" alt="logo"/> 
            <img src={icon} id="profile-logo" alt="profile icon"/>
            <img src={miniProfile} id="icon-bar-1" alt="profile bar" />
            <img src={miniSettings} id="icon-bar-2" alt="profile bar" />
            </div>
        </div>

        <form id='add-point-form' onSubmit={formik.handleSubmit}>
         {/* <div className='point-form-group'>  */}
         <input 
         id='point-name'
         type="text"
         className="add-point"
         onChange={formik.handleChange}
         value={formik.values.firstName}
         placeholder='new point of interest'
         />
         
         <input 
         id="location-coordinates"
         type="text"
         className="add-point"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         placeholder='location'
         />
         
         <input 
         type="text"
         className="add-point"
         //name="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder='category'
         />
         
         <input 
         type="text"
         className="add-point"
         //name="username"
         onChange={formik.handleChange}
         value={formik.values.username}
         placeholder='image file upload'
         />
         
         <input 
         type="text"
         className="add-point"
         //name="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='link'
         />
         
         <input 
         type="text"
         className="add-point"
         //name="Confirmpassword"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='notes'
         />
        

        <div className='save-button'> <button type='submit' disabled={!formik.isValid}>save</button></div>
    </form>
    {/* <div>
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        {formik.errors.lastName ? <div>{formik.errors.email}</div> : null}
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
    </div> */}
    <div className='footer-bar'>
            <img src={globe} className="globe-icon" alt="globe icon"/> 
            <img src={pen} className="pen-icon" alt="pen icon"/>
            <img src={tags} className="tags-icon" alt="tags icon"/>
    </div>
    </div>;
    
}

export default AddPoint
import React from 'react';
import {useFormik} from 'formik'

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

    </div>;
    
}

export default AddPoint
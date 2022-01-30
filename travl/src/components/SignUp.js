import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp(props) {
    let navigate = useNavigate();
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    }
    const onSubmit = (values) => {
        axios.post('http://localhost:4000/signup', values)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('firstName', res.data[0][0].first_name)
            localStorage.setItem('lastName', res.data[0][0].last_name)
            localStorage.setItem('username', res.data[0][0].username)
            localStorage.setItem('id', res.data[0][0].id)
            props.logFunction()
            navigate('/login')
        })
        .catch((err) => console.log(err.response.data))
    }
    const validate = (values) => {
        // console.log('validation')
        const errors = {}
        if(!values.firstName) {
            errors.Name = "You gotta have a first name!"
        }
        if(!values.lastName) {
            errors.lastName = "You gotta have a last name!"
        }
        if(!values.email) {
            errors.email = "Please enter an email address"
        }  else if(!values.email.includes('@') || !values.email.includes('.')){
            errors.email = "Please enter a valid email address."
        }
        if(!values.username) {
            errors.username = "Username Required"
        }
        if(!values.password) {
            errors.password = "Password Required"
        }  else if(values.password.length < 8){
                errors.password = "Password must be longer than 8 characters."
        }
        if(!values.confirmPassword) {
            errors.confirmPassword = "Please confirm password"
        }   else if(values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match"
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
})

    return <div className="outer">
        
        <form id='sign-up-form' onSubmit={formik.handleSubmit}>
         {/* <div className='form-group'>  */}
         <input 
         type="text"
         className="form-control"
         name="firstName"
         onChange={formik.handleChange}
         value={formik.values.firstName}
         placeholder='first name'
         />
         {/* </div> 
         <div className='form-group'>  */}
         <input 
         id="sign-up-last-name"
         type="text"
         className="form-control"
         name="lastName"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         placeholder='last name'
         />
         {/* </div>
         <div className='form-group'>  */}
         <input 
         type="text"
         className="form-control"
         name="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder='email'
         />
         {/* </div>
         <div className='form-group'>  */}
         <input 
         type="text"
         className="form-control"
         name="username"
         onChange={formik.handleChange}
         value={formik.values.username}
         placeholder='username'
         />
         {/* </div>
         <div className='form-group'>  */}
         <input 
         type="password"
         className="form-control"
         name="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='password'
         />
         {/* </div>
         <div className='form-group'>  */}
         <input 
         type="password"
         className="form-control"
         name="confirmPassword"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         placeholder='confirm password'
         />
         {/* </div> */}

         <button type='submit' disabled={!formik.isValid}>create</button>
         <h1 className="brand">Travl</h1>
    </form>

    <div>
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        {formik.errors.email ? <div> 
        {formik.errors.email} </div> : null}
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
    </div>

    </div>;
    
}

export default SignUp
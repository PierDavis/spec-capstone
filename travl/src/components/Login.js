import React from 'react';
import {useFormik} from 'formik';
// import logo from '../travlLogoAB3.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(props) {
    let navigate = useNavigate();
    const initialValues = {
        username: "",
        password: ""
    }
    const onSubmit = (values) => {
        axios.post('http://localhost:4000/login', values)
        .then((res) => {
            localStorage.setItem('firstName', res.data.first_name)
            localStorage.setItem('lastName', res.data.last_name)
            localStorage.setItem('username', res.data.username)
            localStorage.setItem('id', res.data.id)
            // props.logFunction()
            navigate('/profile')
        })
        .catch((err) => {
        console.log(err.response.data)
        })
        console.log('submit clicked')
    }
    
    
    const validate = (values) => {
        console.log('validation')
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    
    return <div className="outer">
        <form id='log-in-form' onSubmit={formik.handleSubmit}>
        {/* <img src={logo} className="Travl-logo" alt="logo" /> */}

            <div className="inputone">
            <input 
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder=' username'
            />
            </div>

            <div className="inputtwo">
            <input 
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder=' password'
            />
            </div>
            <div className="inputhree">
            <button type='submit' disabled={!formik.isValid}>log in</button>
            </div>
        <h1 className="brand">Travl</h1>
        </form>
        <div>
            <p  className="forgot-password-text">
                <a href="#">forgot password?</a>
            </p>
            <p  className="sign-up-text">
                <a href="/signup">sign up</a>
            </p>
        </div>
      
        
    </div>;
}

export default Login;
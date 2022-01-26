import React from 'react';
import {useFormik} from 'formik';
import logo from '../travlLogoAB3.png';

function Login() {
    const initialValues = {
        username: "",
        password: ""
    }
    const onSubmit = (values) => {
        console.log(values)
    }
    //     axios.post('/login', values)
    //     .then((res) => {
    //         console.log(res.data)
    // })
    //     .catch((err) => {
    //     console.log(err.response.data)
    //     //(finish here 5:20 PM - 80 mins into recording)
    // }
    //     console.log('submit clicked')
    
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
            <div class="inputhree">
            <button type='submit' disabled={!formik.isValid}>log in</button>
            </div>
        <h1 className="brand">Travl</h1>
        </form>
        <div>
            <p  className="forgot-password-text">
                <a href="#">forgot password?</a>
            </p>
            <p  className="sign-up-text">
                <a href="#">sign up</a>
            </p>
        </div>
      
        
    </div>;
}

export default Login;
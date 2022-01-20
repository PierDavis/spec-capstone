import React from 'react';
import {useFormik} from 'formik'

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
    
    return <div>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
            <input 
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder='username'
            />
            <input 
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder='password'
            />
            <button type='log in' disabled={!formik.isValid}>log in</button>
        </form>
    </div>;
}

export default Login;
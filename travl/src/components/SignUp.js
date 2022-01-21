import React from 'react';
import {useFormik} from 'formik'

function SignUp() {
    const initialValues = {
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
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

    return <div class="outer">
        
        <form id='sign-up-form' onSubmit={formik.handleSubmit}>
         {/* <div className='form-group'>  */}
         <input 
         type="text"
         className="form-control"
         //name="first name"
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
         //name="last name"
         onChange={formik.handleChange}
         value={formik.values.lastName}
         placeholder='last name'
         />
         {/* </div>
         <div className='form-group'>  */}
         <input 
         type="email"
         className="form-control"
         //name="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder='email'
         />
         {/* </div>
         <div className='form-group'>  */}
         <input 
         type="text"
         className="form-control"
         //name="username"
         onChange={formik.handleChange}
         value={formik.values.username}
         placeholder='username'
         />
         {/* </div>
         <div className='form-group'>  */}
         <input 
         type="password"
         className="form-control"
         //name="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='password'
         />
         {/* </div>
         <div className='form-group'>  */}
         <input 
         type="password"
         className="form-control"
         //name="Confirmpassword"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='confirm password'
         />
         {/* </div> */}

         <button type='submit' disabled={!formik.isValid}>create</button>
         <footer><h1 class="brand">Travl</h1></footer>
    </form>
    <div>
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        {formik.errors.lastName ? <div>{formik.errors.email}</div> : null}
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
    </div>

    </div>;
    
}

export default SignUp
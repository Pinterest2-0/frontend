import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import loginSchema from '../schema_validation/loginSchema';

// LOGIN INITIAL FORM
const initialLoginForm = {
    username: '',
    password: '',
}

// LOGIN FORM ERRORS
const loginFormErrors = {
    username: '',
    password: '',
}


export default function LoginForm() {
    // STATE
    const [ login, setLogin ] = useState(initialLoginForm)
    const [ loginErrors, setLoginErrors ] = useState(loginFormErrors)
    
    // REACH FOR ERROR MESSAGES
    const getLoginErrors = (name, value) => {
        yup.reach(loginSchema, name)
        .validate(value)
        .then(() => {
            setLoginErrors({...loginErrors, [name]: value})
        })
        .catch((error) => {
            setLoginErrors({...loginErrors, [name]: error.message})
        })
    }
    
    // ONCHANGE HANDLER
    const changes = (event) => {
        const { value, name } = event.target;
        setLogin({...login, [name]: value})
        getLoginErrors(name, value)
    }

    // SUBMIT HANDLER
    const submit = event => {
        event.preventDefault()
    }

    return (
        <form onSubmit={submit}>
            <h2> Member Log In</h2>

            <div className='loginErrors'>
                <div>{loginErrors.username}</div>
                <div>{loginErrors.password}</div>
            </div>

            <label>
                Username
                <input name='username' type='text' value={login.username} onChange={changes} />
            </label>
            <br/>

            <label>
                Password
                <input name='password' type='text'value={login.password} onChange={changes} />
            </label>
            <br/>

            <button type='submit'>Log In!</button>
            
        </form>
    )
}
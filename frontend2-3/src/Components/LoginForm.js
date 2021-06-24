import React, { useState } from 'react';
import * as yup from 'yup';
import loginSchema from '../schema_validation/loginSchema';
import axios from 'axios';

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
    const [ currentMember, setCurrentMember] = useState([])

        // POST CURRENT MEMEBERS
        const postCurrentMember = member => {
            axios
            .post('https://pintereachunit4.herokuapp.com/api/auth/login', member)
            .then(response => {
            localStorage.setItem('token', response.data.token);
                setCurrentMember([...currentMember, member]);
            })
            .catch(error => {
                console.log('Error posting data: ', error)
            })
            .finally(() => {
                setLogin(initialLoginForm)
            })
        }
    
    // REACH FOR ERROR MESSAGES
    const getLoginErrors = (name, value) => {
        yup.reach(loginSchema, name)
        .validate(value)
        .then(() => {
            setLoginErrors({...loginErrors, [name]: ''})
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
        const curMem = {
            username: login.username,
            password: login.password,
        }
        postCurrentMember(curMem)
    }

    return (
        <form onSubmit={submit}>
            <h2> Member Log In</h2>
<div className='logininputs'>
            <div className='loginErrors'>
                <div>{loginErrors.username}</div>
                <div>{loginErrors.password}</div>
            </div>

            <label>
                Username
                <input className='usernameinput' name='username' type='text' value={login.username} onChange={changes} />
            </label>
            <br/>

            <label>
                Password
                <input className='passwordinput'name='password' type='password' value={login.password} onChange={changes} />
            </label>
            <br/>
</div>
            <button type='submit'>Log In!</button>
            
        </form>
    )
}
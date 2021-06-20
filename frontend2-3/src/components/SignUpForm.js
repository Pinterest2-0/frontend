import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import {signUpSchema} from '../schema_validation/signUpSchema';

const initialSignUpForm = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    passwordconfirm: '',
    terms: false,
}

export default function SignUpForm() {
    // STATE
    const [ signUp, setSignUp ] = useState(initialSignUpForm)
    const [disabled, setDisabled] = useState(true)
    
    // ONCHANGE HANDLER
    const changes = (event) => {
        const { checked, value, name, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        setSignUp({...signUp, [name]: valueToUse})
    }

    return (
        <form>
        <h2>Register</h2>
        <p>Create your account! It is free for the first month!</p>

        <label>
            <input name='firstname' type='text' value={signUp.firstname} placeholder='First Name' onChange={changes}/>
        </label>
        <br/>

        <label>
            <input name='lastname' type='text' value={signUp.lastname} placeholder='Last Name' onChange={changes}/>
        </label>
        <br/>

        <label>
            <input name='username' type='text' value={signUp.username} placeholder='Choose a username' onChange={changes}/>
        </label>
        <br/>

        <label>
            <input name='password' type='text' value={signUp.password} placeholder='Create your password' onChange={changes}/>
        </label>
        <br/>

        <label>
            <input name='passwordconfirm' type='text' value={signUp.passwordconfirm} placeholder='Confirm your password' onChange={changes}/>
        </label>
        <br/>

        <label>
            I accept the Terms of Use and Privacy Policy.
            <input name='terms' type='checkbox' onChange={changes}/>
        </label>
        <br/>

        <button type='submit' disabled={disabled} >Register!</button>
        
    </form>
    )
}
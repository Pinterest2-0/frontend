import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import signUpSchema from '../schema_validation/signUpSchema';
import axios from 'axios';

const initialSignUpForm = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    passwordconfirm: '',
    terms: false,
}

// SIGN UP FORM ERRORS
const signUpFormErrors = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    passwordconfirm: '',
    terms: '',
}

export default function SignUpForm() {
    // STATE
    const [ signUp, setSignUp ] = useState(initialSignUpForm)
    const [ signUpErrors, setSignUpErrors ] = useState(signUpFormErrors)
    const [ newMember, setNewMember ] = useState([])
    const [ disabled, setDisabled ] = useState(true)

    // REACH FOR ERROR MESSAGES
    const getSignUpErrors = (name, value) => {
        yup.reach(signUpSchema, name)
        .validate(value)
        .then(() => {
            setSignUpErrors({...signUpErrors, [name]: ''})
        })
        .catch((error) => {
            setSignUpErrors({...signUpErrors, [name]: error.errors[0]})
        })
    }

    // POST NEW MEMEBERS
    const postNewMember = member => {
        axios
        .post('https://pintereachunit4.herokuapp.com/api/auth/register', member)
        .then(response => {
            setNewMember([...newMember, member]);
        })
        .catch(error => {
            console.log('Error posting data: ', error)
        })
        .finally(() => {
            setSignUp(initialSignUpForm)
        })
    }
    
    // ONCHANGE HANDLER
    const changes = (event) => {
        const { checked, value, name, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        getSignUpErrors(name, valueToUse)
        setSignUp({...signUp, [name]: valueToUse})
    }

    // SUBMIT HANDLER
    const submit = event => {
        event.preventDefault()
        const newMem = {
            firstname: signUp.firstname,
            lastname: signUp.lastname,
            username: signUp.username,
            password: signUp.password,
            passwordconfirm: signUp.passwordconfirm,
            terms: signUp.terms,
        }
        postNewMember(newMem)
    }

    //SIDE EFFECTS
    //BUTTON ENABLING
    useEffect(() => {
        signUpSchema.isValid(signUp)
        .then(valid => {
            setDisabled(!valid)
        })
    }, [signUp])

    return (
        <form onSubmit={submit} className='signUpForm'>
            <h2>Register</h2>
            <p>Create your account! It is free for the first month!</p>

            <div className='signUpErrors'>
                <div>{signUpErrors.firstname}</div>
                <div>{signUpErrors.lastname}</div>
                <div>{signUpErrors.username}</div>
                <div>{signUpErrors.password}</div>
                <div>{signUpErrors.passwordconfirm}</div>
                <div>{signUpErrors.terms}</div>
            </div>

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
                <input name='password' type='password' value={signUp.password} placeholder='Create your password' onChange={changes}/>
            </label>
            <br/>

            <label>
                <input name='passwordconfirm' type='password' value={signUp.passwordconfirm} placeholder='Confirm your password' onChange={changes}/>
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
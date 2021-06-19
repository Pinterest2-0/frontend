import React, { useState, useEffect } from 'react';

const initialSignUpForm = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    passwordconfirm: '',
    terms: false,
}

export default function SignUpForm() {
    return (
        <form>
        <h2>Register</h2>
        <p>Create your account! It is free for the first month!</p>

        <label>
            <input name='firstname' type='text' placeholder='First Name'/>
        </label>
        <br/>

        <label>
            <input name='lastname' type='text' placeholder='Last Name'/>
        </label>
        <br/>

        <label>
            <input name='username' type='text' placeholder='Choose a username'/>
        </label>
        <br/>

        <label>
            <input name='password' type='text' placeholder='Create your password'/>
        </label>
        <br/>

        <label>
            <input name='passwordconfirm' type='text' placeholder='Confirm your password'/>
        </label>
        <br/>

        <label>
            I accept the Terms of Use and Privacy Policy.
            <input name='terms' type='checkbox'/>
        </label>
        <br/>

        <button>Register!</button>
        
    </form>
    )
}
import React, { useState, useEffect } from 'react';

// OBJECT INITIAL FORM
const initialLoginForm = {
    usename: '',
    password: '',
}


export default function LoginForm() {
    // STATE
    const [ login, setLogin ] = useState(initialLoginForm)
    
    // ONCHANGE HANDLER
    const changes = (name, value) => {
        setLogin({...login, [name]: value})
    }

    // SUBMIT HANDLER
    const submit = event => {
        event.preventDefault()
    }

    return (
        <form>
            <h2> Member Log In</h2>

            <label>
                Username
                <input name='username' type='text' value={login.usename} onChange={changes} />
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
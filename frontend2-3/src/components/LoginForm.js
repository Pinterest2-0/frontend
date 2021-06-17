import React from 'react';

export default function LoginForm() {
    return (
        <form>
            <h2> Member Log In</h2>

            <label>
                Username
                <input name='username' type='text'/>
            </label>
            <br/>

            <label>
                Password
                <input name='password' type='text'/>
            </label>
            <br/>

            <button>Log In!</button>
            
        </form>
    )
}
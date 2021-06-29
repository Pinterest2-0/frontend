import React, { useState } from 'react';
import * as yup from 'yup';
import loginSchema from '../schema_validation/loginSchema';
import {axiosWithAuth} from '../Utils/AxiosWithAuth'; 
import {useHistory} from 'react-router-dom';


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


export default function LoginForm({setIsLoggedIn}) {

const {push} = useHistory()

    // STATE
    const [ login, setLogin ] = useState(initialLoginForm)
    const [ loginErrors, setLoginErrors ] = useState(loginFormErrors)
    const [ currentMember, setCurrentMember] = useState([])

        // POST CURRENT MEMEBERS
        const postCurrentMember = member => {
            axiosWithAuth()
            .post('/auth/login', member)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                setCurrentMember([...currentMember,response]);
                push('/userdashboard')
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
        setIsLoggedIn(true)
        const curMem = {
            username: login.username,
            password: login.password,
        }
        postCurrentMember(curMem)
    }

    return (
        <div className='loginComponent'>
            <div className='loginImage'>
                <img src='https://c0.wallpaperflare.com/preview/728/375/731/aerial-analog-background-blog.jpg' alt='typing on laptop at desk'></img>
            </div>

            <div class="vl"></div>

            <div className='loginFormContainer'>
                
                <form onSubmit={submit} className='loginForm'>
                    <h1 className='loginwelcome'>  Welcome Back! </h1>
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
                        <input name='password' type='password' value={login.password} onChange={changes} />
                    </label>
                    <br/>

                    <button type='submit'>Log In!</button>
                    
                </form>
            </div>
        </div>
    )
}
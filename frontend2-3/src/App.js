import React from 'react';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import  {useDarkMode} from "./Hooks/useDarkMode";
import Toggle from './Components/Toggler'; 
import {Route, Link, Switch } from 'react-router-dom'; 
import './App.css';
import Dashboard from './Components/Dashboard'; 


function App() {
  

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
    <div className="App">
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <nav class="NAVBAR">
        <h1>PinteReach</h1>
          {/*JULIAN */}  
          {/*Search Bar */}    
          <input type="text" placeholder="Search.."/>
          {/*Links */} 
          <a class="active" href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>

          {/*STEPH */}
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>   
      </nav>
      {/* <img src='https://kittentoob.com/wp-content/uploads/2016/10/Scottish-Fold-1.jpg' alt=''/> */}
      <br/>

      <Link to='/userdashboard'>Access Test Userdashboard</Link>

    <Switch>
      <Route exact path='/login'>
        <LoginForm />
      </Route>

      <Route exact path='/userdashboard' component={Dashboard}/>

      <Route exact path='/signup'>
        <SignUpForm />
      </Route>

       
    </Switch>
    

     
    </div>

</>
</ThemeProvider>
  )
}

export default App;
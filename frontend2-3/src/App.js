import React from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./Hooks/useDarkMode";
import Toggle from './components/Toggler'; 
import {Route, Link, Switch } from 'react-router-dom'; 
import './App.css';
import Dashboard from './components/Dashboard'; 


function App() {
  

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
    <div className="App">
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <nav>
        <h1>PinteReach</h1>
          {/*JULIAN */}  
          {/*Search Bar */}    
          <input type="text" placeholder="Search.."/>
          {/*Links */} 
          <a class="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          {/*STEPH */}
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>   
      </nav>
      
      <Link to='/userdashboard'>Access Test Userdashboard</Link>

    <Switch>
      <Route path='/login'>
        <LoginForm />
      </Route>

      <Route path='/signup'>
        <SignUpForm />
      </Route>

        <Route exact path='/userdashboard'>
          <Dashboard/>
        </Route>
    </Switch>
    

      <img src='https://kittentoob.com/wp-content/uploads/2016/10/Scottish-Fold-1.jpg' alt=''/>
      <br/>
    </div>

</>
</ThemeProvider>
  )
}

export default App;
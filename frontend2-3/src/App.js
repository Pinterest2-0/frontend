import React from 'react';

import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';

import LandingPage from './Components/LandingPage'; 
import About from './Components/About';

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
      
      <nav className="NAVBAR">
        <h1 className='apptitle'>PinteReach</h1>

          {/*Search Bar */}    
          <input type="text" placeholder="Search.."/>
          
          {/*Links */} 
          <Link className="active" to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to= "/contact">Contact</Link>

          {/*STEPH */}
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>   
          <Toggle theme={theme} toggleTheme={themeToggler} />
      </nav>
      <br/>

      <Link className='dashLink' to='/userdashboard'>Access Test Userdashboard</Link>

    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      
      <Route exact path='/login'>
        <LoginForm />
      </Route>
        
      <Route exact path='/userdashboard' component={Dashboard}/>
      < Route exact path='/' component={LandingPage}/>

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
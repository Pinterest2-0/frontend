import React from 'react';

import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';

import LandingPage from './Components/LandingPage'; 

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import  {useDarkMode} from "./Hooks/useDarkMode";
import Toggle from './Components/Toggler'; 

import {Route, Link, Switch } from 'react-router-dom'; 
import './App.css';
import Dashboard from './Components/Dashboard'; 
import CategoryList from './Components/CategoryList';

function App() {
  

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
    <div className="App">
      
      <nav className="NAVBAR">
        <h1 className='title'>PinteReach</h1>
          {/*JULIAN */}  
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

      <Link className='dashboardLink' to='/userdashboard'>Access Test Userdashboard</Link>
  <CategoryList/>
    <Switch>
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
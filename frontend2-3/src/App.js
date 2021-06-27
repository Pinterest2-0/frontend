import React, {useState} from 'react';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import LandingPage from './Components/LandingPage'; 
import About from './Components/About';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import  {useDarkMode} from "./Hooks/useDarkMode";
import Toggle from './Components/Toggler'; 
import UpdateModal from './Components/UpdateModal';  // This is needed. 
import {Route, Link, Switch } from 'react-router-dom'; 
import './App.css';
import Dashboard from './Components/Dashboard'; 
import Contact from './Components/Contact';
import CardCreator from './Components/CardCreator'; 
import PrivateRoute from './Components/PrivateRoute';

function App() {
  

  const [theme, themeToggler] = useDarkMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href='/login';
  }

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
          {isLoggedIn ? null : <Link to='/login'>Log In</Link> }
          {isLoggedIn ? null : <Link to='/signup'>Sign Up</Link>}   
          {isLoggedIn ? <Link onClick={handleLogout}>Log Out</Link> : null}
          {isLoggedIn ? <Link className='dashLink' to='/userdashboard'> Dashboard</Link>: null}
          <Toggle theme={theme} toggleTheme={themeToggler} />
          
      </nav>
      <br/>

    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      
<Route path='/contact'>
  <Contact/>
</Route>


      <Route exact path='/login'>
        <LoginForm setIsLoggedIn = {setIsLoggedIn}/>
      </Route>
        
      <PrivateRoute exact path='/userdashboard' component={Dashboard}/>
      < Route exact path='/' component={LandingPage}/>

      <Route exact path='/signup'>
        <SignUpForm />
      </Route>
<PrivateRoute exact path='/update/articles/:id' component={UpdateModal}/>   {/*This is very much needed*/}
<PrivateRoute exact path='/add' component={CardCreator}/>

    </Switch>
    

     
    </div>

</>
</ThemeProvider>
  )
}

export default App;
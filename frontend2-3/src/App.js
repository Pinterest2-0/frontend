import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>PinteReach</h1>
          <Link to='/login'>Log In</Link>

          <Link to='/signup'>Sign Up</Link>   
      </nav>

      <Route path='/login'>
        <LoginForm />
      </Route>

      <Route path='/signup'>
        <SignUpForm />
      </Route>   
    </div>
  );
}

export default App;

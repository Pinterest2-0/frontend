import logo from './logo.svg';
import {Route, Link, Switch } from 'react-router-dom'; 
import './App.css';
import Dashboard from './Components/Dashboard'; 

function App() {
  return (
    <div className="App">
      <h1>Parent Component</h1>
      <h3>Welcome to article efficiency</h3>
      <Link to='/userdashboard'>Access Test Userdashboard</Link>
      <Switch>
        <Route exact path='/userdashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

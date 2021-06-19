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
    <div className= 'NAVBAR'>

<a class="active" href="#home">Home</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>

<input type="text" placeholder="Search.."/>   
</div>

<img src='https://kittentoob.com/wp-content/uploads/2016/10/Scottish-Fold-1.jpg' alt=''/>
<br/>
      <h1>Parent Component</h1>
      <h3>Welcome to article efficiency</h3>
      
      <Link to='/userdashboard'>Access Test Userdashboard</Link>
      <Switch>
        <Route exact path='/userdashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </div>

</>
</ThemeProvider>
  )
}

export default App;
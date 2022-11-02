import './App.css';
import styled, { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Login from './pages/Login';
const theme = {
  dark: {
    primary: '#8E352F',
    secondary: '#272727',
    accent : '#C26258',
    background: '#1E1E1E',
    text: '#FFFFFF'
}
}

function App() {
  return (
    <div >
    
    
    <Home/>
    {/* <Login/> */}

  
    </div>
  );
}



export default App;

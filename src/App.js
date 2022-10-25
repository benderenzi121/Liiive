import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import StyledNav from './components/nav';
import Sidebar from './components/sidebar';

const theme = {
  dark: {
    primary: '#462C20',
    secondary: '#28221F',
    accent : '#753A27',
    background: '#1E1E1E',
    text: '#FFFFFF'
}
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <StyledNav/>
      <StyledWindow>
        <Sidebar contents = {
          <div>
          <p>test</p>
          <p>test</p>
          </div>
        }/>
        <Content>
          
        </Content>
      </StyledWindow>
       
     
    </div>
    </ThemeProvider>
  );
}

const StyledWindow = styled.div`
  display:flex;
  flex-direction:row;
`
export default App;

const Content = styled.div`
  background-color:${props => props.theme.dark.background};
  height:100vh;
  width:75%;
`
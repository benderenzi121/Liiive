import React, { Component } from 'react'
import styled from 'styled-components';
import Sidebar from '../components/sidebar';
import Button from '../components/button';
import Nav from '../components/nav';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Nav/>
      <StyledWindow>
    
        <Sidebar contents = {
          <span>
          <h1>Rooms</h1>
          <Button text ='Jazz' />
          <Button text ='Hip hop' />
          <Button text ='Techno' />
          <Button text ='House' />
          <Button text ='Dubstep' />
          <Button text ='Punk' /><Button text ='Jazz' />
          <Button text ='Alternative' />
          <Button text ='Easy Listening' />
         </span>
        }/>
        <Content>
          <h1>Join a Room on the Sidebar to start chatting!</h1>
        </Content>
      </StyledWindow>
      </Container>
    )
  }
}
const StyledWindow = styled.div`
  display:flex;
  flex-direction:row;
  height:100%;
`


const Content = styled.div`
  background-color:${props => props.theme.dark.background};
  width:75%;
  color: ${props => props.theme.dark.text};
`


const Container = styled.div`
  height:100%;
`

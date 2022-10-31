import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from '../components/modal'

export default class Login extends Component {
  render() {
    return (
      <LoginPage>
        <Modal/>
      </LoginPage>
    )
  }
}


const LoginPage = styled.div`
background-color: ${props => props.theme.dark.background};
height: 95vh;
display: flex;

`
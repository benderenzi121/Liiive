import React, { Component } from 'react'
import Button from '../components/button'
import LoginForm from '../components/loginForm'
import Nav from '../components/nav'
import Sidebar from '../components/sidebar'

export default class Home extends Component {
  render() {
    return (
      <div className='display: flex flex-col h-screen bg-background text-gray-200 '>
        <Nav/>
        <span className='flex flex-row w-screen h-full'>
        <Sidebar contents={<span className='flex flex-col m-5'>
         <Button text ='Jazz' />
          <Button text ='Hip hop' />
          <Button text ='Techno' />
          <Button text ='House' />
          <Button text ='Dubstep' />
          <Button text ='Punk' /><Button text ='Jazz' />
          <Button text ='Alternative' />
          <Button text ='Easy Listening' />
        </span> } />
          <div className='flex flex-row justify-center items-center text-center w-full'>
            <h1>content</h1>
          </div>
          
        </span>

{/* 
        <LoginForm/> */}
      </div>
    )
  }
}

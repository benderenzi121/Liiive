import React, { Component }  from 'react'
import styled from 'styled-components'

export default function Modal() {
  return (
   
    <styledModal>
       <p>Hello</p> 
    </styledModal>
  
  )
}

const StyledModal = styled.div`
    color: red;
    height:100%;
    width:100%;
    background-color: ${props => props.theme.dark.text};
` 

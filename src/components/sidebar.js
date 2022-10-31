import React from 'react'
import styled from 'styled-components'

export default function Sidebar({contents}) {
  return (
    <StyledSideBar>
        {contents}
    </StyledSideBar>
   
  )
}


const StyledSideBar = styled.div`
    background-color:${props => props.theme.dark.secondary};
    display:flex; 
    flex-direction: column;
    color: ${props => props.theme.dark.text};
    width:25%;
    margin:0 auto;
    
`
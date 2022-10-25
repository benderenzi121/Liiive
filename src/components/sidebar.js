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
    color: ${props => props.theme.dark.text};
    height:100vh;
    width:25%;
`
import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
export default function Nav() {
  return (
    <StyledNav>
        <StyledLogo>Liiive</StyledLogo>
        <span>
            <Button text={'Register'}/>
            <Button text={'Login'}/>
        </span>    
    </StyledNav>

  )
}

const StyledNav = styled.div`
    display:flex;
    flex: 12 0 auto;
    justify-content: space-between;
    align-items:center;
    background-color:${props => props.theme.dark.primary};
    color: ${props => props.theme.dark.text};
    padding:  0 10px;
` 
const StyledLogo = styled.p`
    align-self:center;
    font-size:1.5rem;
    padding-left:10px;
`
import React from "react";
import styled from "styled-components";
export default function Button({ text }) {
  return (
    <StyledButton>
      <a href="google.com">{text}</a>
    </StyledButton>
  );
}

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.dark.accent};
    color: ${(props) => props.theme.dark.text};
    border:none;
    padding:2px 8px;
    margin:5px;
    font-size:1.125rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
    
    linkstyle:none;
    a:hover: cursor('pointer');
    a{
      text-decoration:none;
      color: inherit;
    }
`;

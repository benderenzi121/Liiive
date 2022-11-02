import React from "react";
import styled from "styled-components";
export default function Button({ text }) {
  return (
    <button className='m-2 px-2 py-1 bg-accent shadow-md rounded-sm '>
      <a className="m-2 text-md text-text" href="google.com">{text}</a>
    </button>
  );
}



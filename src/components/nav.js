import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
export default function Nav() {
  return (
    <span className='w-screen flex justify-between items-center bg-primary h-12 px-4'>
      
        <p className='text-xl font-bold'>Liiive</p>
        <span className='flex '>
            <Button text={'Login'}/>
            <Button text={'Register'}/>
      
      
        </span>
    </span>

  )
}



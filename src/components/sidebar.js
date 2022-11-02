import React from 'react'
import styled from 'styled-components'

export default function Sidebar({contents}) {
  return (
    <div className='flex flex-col w-1/5 bg-secondary text-center'>
        {contents}
    </div>
   
  )
}

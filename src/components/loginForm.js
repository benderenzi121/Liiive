import React from 'react'
import Button from './button'

export default function LoginForm() {
  return (
    <div className='flex justify-center items-center h-screen'>
     
            <form className='flex flex-col p-5 bg-secondary text-center  w-1/6'>
                <h1 className=' font-bold text-xl text-text mb-5 border-b pb-5'>Login</h1>
                <span className=' mx-5 flex flex-col text-left '>
                <label className='font-bold mb-2' for='username'>Username </label>
                <input id='username' name='username' type='text' placeholder='UserName' className='text-text p-1 rounded-sm bg-background' />
                </span>
                <span className='flex flex-col m-5 text-left' >
                <label className='font-bold mb-2' for='password'>Password </label>
                <input id='password' name='username' type='text' placeholder='Password' className='text-text p-1 rounded-sm bg-background' />
                </span>
                <Button className='mt-10'text='login'/>        
            </form>
   
    </div>
  )
}

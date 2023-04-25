import React from 'react'
import { useState } from 'react'

export default function BasicForm() {
    const [email,setEmail]=useState('')
    const handleEmailChange=event=>
    {
        setEmail(event.target.value)
    };
    const handleSubmit=event=>{
        alert("hi");
    }
   <form onSubmit={handleSubmit}>
    <div>
        <label>Email address</label>
        <input type='email' name='email'
         placeholder='Enter email'
         onChange={handleEmailChange}
         value={email}>
        </input>
    </div>
    <button type='submit'>submit</button>
   </form>
}

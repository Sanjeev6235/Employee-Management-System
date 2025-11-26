import React, { useState } from 'react'

function Login({handleLogin}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  

  function handleSubmit(e){
    e.preventDefault();
    handleLogin(email,password);
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[#1c1c1c]'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5 border-2 border-blue-400 rounded-xl w-[30%] h-[45%] px-10 '>
              <h1 className='text-3xl font-semibold text-blue-400'>Login In User</h1>
        <input required onChange={(e)=>setEmail(e.target.value)} className='w-full border-2 border-blue-600 rounded-full py-3 px-5 text-xl outline-none text-white placeholder:text-gray-400 bg-transparent ' type="email" placeholder='Enter Your Email' value={email}/>
        <input required onChange={(e)=>setPassword(e.target.value)} className='w-full border-2 border-blue-600 rounded-full py-3 px-5 text-xl outline-none text-white placeholder:text-gray-400 bg-transparent ' type="password" placeholder='Enter Your Password' value={password} />
        <button  className='w-full border-none rounded-full py-3 px-5 text-xl outline-none text-white bg-blue-400'>Log In</button>
        </form>
    </div>
  )
}

export default Login
import React from 'react'

function Header(props) {
  

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.setUser('')
    // window.location.reload();
  }

  return (
    <div className='w-full h-35 bg-[#1c1c1c] flex items-center justify-between text-white text-xl font-semibold px-12'>
        <p>Hello <br /><span className='text-2xl font-bold'>{props.data.name}👋</span> </p>
        <button onClick={logOutUser} className='bg-red-600 p-3 rounded'> Log Out</button>
    </div>
  )
}

export default Header
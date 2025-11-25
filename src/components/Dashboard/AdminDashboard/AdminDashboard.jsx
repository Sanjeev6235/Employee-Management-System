import React, { useState } from 'react'
import Header from '../EmployeeDashboard/Header'
import CreatTask from './CreatTask'
import AllTaskAdmin from './AllTaskAdmin'

function AdminDashboard(props) {
    const [created, setCreated] = useState(false);
  
  return (
    <div className='w-screen h-screen '>
      <Header data={props.data} setUser={props.setUser} />
      <CreatTask  setCreated={setCreated} />
      <AllTaskAdmin />
      {created && <h2 className='fixed bottom-15 left-1/2 text-white bg-green-400 px-3 py-1 rounded  text-center text-xl mt-2'>Task Created</h2>}
    </div>
  )
}

export default AdminDashboard
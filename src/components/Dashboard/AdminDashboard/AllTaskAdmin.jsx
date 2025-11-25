import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider'

function AllTaskAdmin() {
  const authData = useContext(AuthContext)

  return (
    <div className='px-4 py-2 mt-4 '>
      <div className='bg-green-400 py-2 px-4 flex justify-between rounded mb-3 text-black'>
            <h2 className='w-1/5 text-xl px-4'>Employee Name</h2>
            <h2 className='w-1/5 text-xl text-center '>New Task</h2>
            <h2 className='w-1/5 text-xl text-center'>Active Task</h2>
            <h2 className='w-1/5 text-xl text-center'>Completed Task</h2>
            <h2 className='w-1/5 text-xl text-center'>Failed Task</h2>
        </div>
    <div className='AllTaskAdmin  overflow-auto h-48'>
        {authData.employees.map((e,idx)=>{          
          return(
           <div key={idx} className=' bg-transparent border-2 border-blue-400 py-2 px-4 flex justify-between rounded mb-3 text-emerald-200'>
            <h2 className='w-1/5 text-xl px-4 '>{e.name}</h2>
            <h2 className='w-1/5 text-xl text-center '>{e.taskCount.newTask}</h2>
            <h2 className='w-1/5 text-xl text-center '>{e.taskCount.active}</h2>
            <h2 className='w-1/5 text-xl text-center'>{e.taskCount.completed}</h2>
            <h2 className='w-1/5 text-xl text-center'>{e.taskCount.failed}</h2>
        </div>
          )
        })
        }
    </div>
    </div>
  )
}

export default AllTaskAdmin
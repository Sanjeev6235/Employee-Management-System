import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/AuthProvider';

function CreatTask({setCreated}) {
  const authData = useContext(AuthContext);
  const employeeData = authData.employees;

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskDiscription, setTaskDiscription] = useState('')


  function handleSubmit(e) {
    e.preventDefault();
    setCreated(true)
    setTimeout(() => {
      setCreated(false)
    }, 2000);
    {
      employeeData.forEach(e => {
        if (asignTo == e.name) {
          const data = {
            "taskTitle": taskTitle,
            "taskDate": taskDate,
            "taskDescription": taskDiscription,
            "taskCategory": taskCategory,
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false,
          }
          e.tasks.push(data);
          e.taskCount.newTask = e.taskCount.newTask + 1;
          console.log(employeeData);
          
          localStorage.setItem('employees',JSON.stringify(employeeData));
          

          setTaskTitle('')
          setTaskDate('')
          setAsignTo('')
          setTaskCategory('')
          setTaskDiscription('')
        }
      });
    }
  }


  return (
    <div>
      <div className='w-full bg-gray-800 px-10 py-6 text-white '>
        <form className='w-full flex items-center justify-between' onSubmit={handleSubmit}>
          <div className='w-1/2'>
            <div>
              <h3 className='text-lm text-gray-300 mb-0.5'>Task Title</h3>
              <input required onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} className='border-2 text-lm bg-transparent outline-none border-gray-400 rounded w-4/5 px-3 py-1 placeholder:text-gray-400 mb-4 ' type="text" placeholder='Make a UI Design' />
            </div>
            <div>
              <h3  className='text-lm text-gray-300 mb-0.5'>Date</h3>
              <input required onChange={(e) => setTaskDate(e.target.value)} value={taskDate} className='border-2 text-lm bg-transparent outline-none border-gray-400 rounded w-4/5 px-3 py-1 placeholder:text-gray-400 mb-4 ' type="date" />
            </div>
            <div>
              <h3 className='text-lm text-gray-300 mb-0.5'>Asign to</h3>
              <input required onChange={(e) => setAsignTo(e.target.value)} value={asignTo} className='border-2 text-lm bg-transparent outline-none border-gray-400 rounded w-4/5 px-3 py-1 placeholder:text-gray-400 mb-4 ' type="text" placeholder='Employee name' />
            </div>
            <div>
              <h3 className='text-lm text-gray-300 mb-0.5'>Category</h3>
              <input required onChange={(e) => setTaskCategory(e.target.value)} value={taskCategory} className='border-2 text-lm bg-transparent outline-none border-gray-400 rounded w-4/5 px-3 py-1 placeholder:text-gray-400 mb-4 ' type="text" placeholder='Design, dev,etc' />
            </div>
          </div>
          <div className='w-1/2'>
            <div>
              <h3 className='text-lm text-gray-300 mb-0.5'>Discription</h3>
              <textarea required onChange={(e) => setTaskDiscription(e.target.value)} value={taskDiscription} className='w-full h-50 text-lm px-4 py-2 rounded outline-none bg-transparent border-2 border-gray-400' name="" id="" rows={10} ></textarea>
            </div>
            <button className=' w-full py-3 mt-5 border-2 text-lm bg-green-400 outline-none border-none rounded'>Creat Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatTask
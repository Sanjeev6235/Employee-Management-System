import React from 'react'

const FailedTask = ({data}) => {
  return (
   <div className='w-[26%] h-90 bg-purple-400 rounded-2xl px-6 py-4 flex flex-col shrink-0 gap-2'>
        <div className='h-10 flex items-center justify-between'>
          <p className='bg-red-500 px-2'>{data.taskCategory}</p>
          <p>{data.taskDate}</p>
        </div>
        <h1 className='text-3xl font-bold'>{data.taskTitle}</h1>
        <p className='font-semibold'>{data.taskDescription}</p>
        {/* <img className='w-full overflow-hidden object-cover' src={data.tasks[0].img} alt="" /> */}
         <div className='flex items-center justify-center mt-4'>
          <button className='px-2 py-1 rounded w-full items-center bg-red-400 text-lm'>Failed</button>
        </div>
        <img className='w-full overflow-hidden object-cover rounded' src={data.img} alt="" />

      </div>
  )
}

export default FailedTask
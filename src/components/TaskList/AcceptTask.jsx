import React from 'react'

const AcceptTask = ({data}) => {  
  return (
      <div className='w-[26%] h-90 bg-[#14B8A6] rounded-2xl px-6 py-4 flex flex-col shrink-0 gap-2'>
        <div className='h-10 flex items-center justify-between'>
          <p className='bg-red-500 px-2'>{data.taskCategory}</p>
          <p>{data.taskDate}</p>
        </div>
        <h1 className='text-3xl font-bold'>{data.taskTitle}</h1>
        <p className='font-semibold'>{data.taskDescription}</p>
        <div className='flex items-center justify-between mt-4'>
          <button className='px-2 py-1 rounded bg-green-400 text-sm'>Mark as Completed</button>
          <button className='px-2 py-1 rounded bg-red-400 text-sm'>Mark as Failed</button>
        </div>
        <img className='w-full overflow-hidden object-cover rounded' src={data.img} alt="" />

      </div>
  )
}

export default AcceptTask
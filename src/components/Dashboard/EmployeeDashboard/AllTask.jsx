import React from 'react'

function AllTask({data}) {
  return (
    <div className='px-6 py-3 flex gap-4 '>
        <div className='w-1/4 h-32 bg-[#7C3AED] rounded-xl px-8 py-4 text-white flex flex-col item-center gap-1 text-2xl font-semibold hover:ring-2 hover:ring-[color]/40 border border-slate-700'>
            <h1 className='text-3xl'>{data.taskCount.newTask}</h1>
            <p>New Task</p>
        </div>
         <div className='w-1/4 h-32 bg-[#14B8A6] rounded-xl px-8 py-4 text-white flex flex-col item-center gap-1 text-2xl font-semibold'>
            <h1 className='text-3xl'>{data.taskCount.active}</h1>
            <p>Accept Task</p>
        </div>
         <div className='w-1/4 h-32 bg-[#E879F9] rounded-xl px-8 py-4 text-white flex flex-col item-center gap-1 text-2xl font-semibold'>
            <h1 className='text-3xl'>{data.taskCount.completed}</h1>
            <p>Complete Task</p>
        </div>
         <div className='w-1/4 h-32 bg-[#FB7185] rounded-xl px-8 py-4 text-white flex flex-col item-center gap-1 text-2xl font-semibold'>
            <h1 className='text-3xl'>{data.taskCount.failed}</h1>
            <p>Failed Task</p>
        </div>
    </div>
  )
}

export default AllTask
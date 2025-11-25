import React from 'react'
import AcceptTask from '../../TaskList/AcceptTask'
import NewTask from '../../TaskList/NewTask'
import CompleteTask from '../../TaskList/CompleteTask'
import FailedTask from '../../TaskList/FailedTask'

function TaskDetailes({ data }) {
  return (
    <div className=' TaskCard px-6 py-10 mt-10 flex gap-5 overflow-auto flex-nowrap'>
      {data.tasks.map((elem, idx)=>{ 
          if(elem.newTask){
          return <NewTask data={elem} key={idx} />
        }       
        if(elem.active){
          return <AcceptTask data={elem} key={idx} />
        }
        if(elem.completed){
          return <CompleteTask data={elem} key={idx} />
        }
        if(elem.failed){
          return <FailedTask data={elem} key={idx} />
        }
      })}
    </div>
  )
}

export default TaskDetailes
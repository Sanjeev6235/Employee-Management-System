import React from 'react'
import Header from './Header'
import AllTask from './AllTask'
import TaskDetailes from './TaskDetailes'

function EmployeeDashboard(props) {
  console.log(props);
  
  
  return (
    <div>
      <Header data={props.data} setUser={props.setUser} />
      <AllTask data={props.data} />
      <TaskDetailes data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
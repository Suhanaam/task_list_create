import React from 'react'


const tasks=['learn react','practice coding','build projects']
const handleTask=()=>{
    console.log(tasks)
}
const handleClick=(task)=>{
  console.log(`you clicked on ${task}`)
}
const TaskList = () => {
  return (
    <div>Task List
    <button onClick={handleTask}>Get Tasks</button>
    <ul>
      {
        tasks.map((task,index)=>(
          <li key={index}>
            {task}
            <button onClick={()=>handleClick(task)}>click me</button>
          </li>
        ))
      }
    </ul>
    </div>
  )
}

export default TaskList
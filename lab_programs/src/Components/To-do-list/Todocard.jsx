import { useState } from "react"

export default function Todocard(){
    const [task,setTask]=useState();
    return(
        <>
            <div>
                <h1>To-Do-List</h1>
                <input type="text" placeholder="Add new task" onKeyUp={(event)=>{setTask(event.target.value)}}/>
                <button onClick={()=>{console.log(task)}}>
                    Add
                </button>
                <div>
                    <i>No Task Added Yet</i>
                </div>
            </div>
        </>
    )
}
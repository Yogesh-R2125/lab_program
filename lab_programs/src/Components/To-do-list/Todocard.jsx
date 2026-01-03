import { useState } from "react"

export default function Todocard(){
  const [tasks, setTasks] = useState([]);       
  const [text, setText] = useState("");         
  const addTask = (e) => { 
    e.preventDefault(); 
    const trimmed = text.trim(); 
    if (!trimmed) return;                      
    const newTask = { 
      id: Date.now(), 
      text: trimmed, 
      completed: false, 
    }; 
    setTasks([newTask, ...tasks]);               
    setText(""); 
  }; 
  const deleteTask = (id) => { 
    setTasks(tasks.filter((t) => t.id !== id)); 
  }; 
  const toggleTask = (id) => { 
    setTasks( 
      tasks.map((t) => 
        t.id === id ? { ...t, completed: !t.completed } : t 
      ) 
    ); 
  }; 
  return ( 
      <div className="w-full max-w-md bg-slate-800 rounded-lg shadow-2xl p-6 border border-slate-700">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">To-Do List</h2> 
        <form onSubmit={addTask} className="mb-6 flex gap-2"> 
          <input 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter new task" 
            aria-label="Task" 
            className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 placeholder-slate-400 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-blue-500"
          /> 
          <button 
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-slate-900 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Add
          </button> 
        </form> 
        <ul className="space-y-2">
          {tasks.length === 0 && (
            <li className="text-center text-slate-400 py-8">No tasks yet</li>
          )} 
          {tasks.map((task) => ( 
            <li key={task.id} className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors duration-200"> 
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(task.id)} 
                className="w-5 h-5 cursor-pointer accent-blue-500"
              /> 
              <span 
                onClick={() => toggleTask(task.id)} 
                className={`flex-1 cursor-pointer transition-all duration-200 ${
                  task.completed 
                    ? "line-through text-slate-400" 
                    : "text-white"
                }`} 
              > 
                {task.text} 
              </span> 
              <button 
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors duration-200"
                onClick={() => deleteTask(task.id)}
              > 
                Delete 
              </button> 
            </li> 
          ))} 
        </ul> 
      </div>
  ); 
}
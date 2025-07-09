import React, { useState } from "react";
import './todo.css'
import Clock from './clock.jsx'
import { MdDelete, MdPadding } from "react-icons/md";

function Todo() {
    const [inputValue ,setInputval]= useState(" ");
    const [task , setTask] = useState([]);
    const handleInputChange = (value) =>{
        setInputval(value)
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        if(!inputValue) return;
        setTask((prev) => [...prev,inputValue] )
        setInputval("")
    }

    const handleDelete = (value)=>{
      const updateTask = task.filter((curTask)=>curTask !== value )
      setTask(updateTask)
    }
    
  return (
    <section className="todo-container">
      <header>
        <h1 className="heading">Todo App</h1>
      </header>
      <Clock/>
      <section className="form">
        <form onSubmit={handleFormSubmit} >
            <div>
                <input type="text" className="todo-input" value={inputValue}onChange={(event) => handleInputChange(event.target.value)}
                />
                  
                <button type="submit" className="todo-btn" 
                >
                Add Task
                </button>
            </div>
            <div>
                <ul className="task-list" >
                
                    {task.map((item, index) => (
                        <li key={index} className="task-item">{item}<MdDelete className="DeleteButton" onClick={() => handleDelete(item)} /></li>
                        
                        
                    ))}
                    
                </ul>
            </div>
        </form>
      </section>
    </section>
  );
}

export default Todo;

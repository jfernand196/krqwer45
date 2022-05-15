import React, { useState } from 'react';
import "./index.css"

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

const App = ()=> {
  
      
    const tasks= [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ]
    
    
   const [state, setState] = useState(tasks)
   const [newTask, setNewTask] = useState("")
   const [color, setColor] = useState(false)
   let validation= ""

   const handleChange = (e) => {
    
    let validation = e.target.value
    
    if(e.key === "Enter" && validation.length === 0){
      setColor(true)
     e.preventDefault()

    }
 
      else {setNewTask(validation)
      validation = ""} 
   }
   
   
  const handleSubmit = (e) =>{
  e.preventDefault()
  e.target.reset()
  
  const NewChore = {
    id: Date.now(),
    name: newTask,
    done: false
  }

 setState([...state, NewChore])
  
  }

  const displayWord = (id)=>{
    
    const findTask = state.map((el)=>{
      if(el.id === id) { el.done = !el.done}
      return el
    })
    setState(findTask)
  }

 
    return (
    
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {state.map((task, index) => <li className={task.done? "done": ""} key={task.id} onClick={()=>displayWord(task.id) }>{task.name}</li>)}
          </ul>
          <form onSubmit={handleSubmit}>
            <input type="text" id="new-task" className={color? 'error': ""} onKeyPress={handleChange} placeholder="Ingresa una tarea y oprime Enter" onChange={handleChange}  />
          </form>
        </div>
      </div>
      
    )
  }


export default App;

import { useEffect, useState } from "react"
import './add_item.css'

function AddItem() {
    const [ todoList,setTodoList ]=useState([])
    const [ input,setInput ] = useState("")

    const handelInput = (e)=>{
      setInput(e.target.value)
   }
    
   const setList = () =>{
    todoList.push(input)
    console.log(todoList)
   }
   const handelDelete = (index)=>{
    const updatedTodo = todoList.filter((_,i) => i !== index)
    setTodoList(updatedTodo)
    console.log(todoList)
   }

  return (
    <div className="box">
        <h3>Add item</h3>
        <div>
            <div>
                <input value={input} onChange={handelInput} type="text" />
                <button onClick={setList}>add</button>
            </div>
            <div>{todoList.map((item,index)=>(
                <div>
                    <p key={index}>{item}</p>
                    <button onClick={()=>handelDelete(index)}>Delete</button>
                </div>
                
            ))}
            
            </div>
        </div>
        
        
    </div>
  )
}

export default AddItem
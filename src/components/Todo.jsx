import React, { useState } from "react";
import {TodoInput} from "./TodoInput"
import { TodoList } from "./TodoList";
import uuid from "react-uuid";

import './styles/todo.css'

const Todo = ()=>{

  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const handleTask = (value)=>{
    console.log(value);
    setTask(value)
  }

  const handleData = ()=>{
    let payload = {
      title : task,
      status : false,
     id : uuid()
    }
    let newData = [...data, payload];
    
    setData(newData);
    setTask("")
    console.log(newData)
  }

  // const handleDelete =(id)=>{
  //   let newData = data.filter((el)=>{
  //     return el.id !== id
  //   });
  //   setData(newData)
  //   console.log(newData);
  // }
  
  return (
    <>
    
   
     <div className="box item form">
     <TodoInput task={task} 
    handleTask={handleTask}
     handleData={handleData}/>
     </div>
   
     <div className="box">
     {
       data.map((item)=>{
         return <TodoList key={item.id} item={item}/>
       })
     }
     </div>
    </>
  )
}

export {Todo}
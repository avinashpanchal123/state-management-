import React from "react";
import './styles/todoList.css'

const TodoList = ({ item }) => {
  console.log(item)
  return (
    <>
      <div className="item">
        <p>{item.title} </p>
        <div>
          <button className="listButton">X</button>
        </div>
      </div>
    
      {/* <button
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        Delete
      </button> */}
    </>
  );
};

export { TodoList };

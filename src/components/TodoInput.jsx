import React from "react";
import './styles/todoInput.css'

const TodoInput = ({ task, handleTask ,handleData }) => {
  return (
    <>
      <input
        className="input"
        onChange={(e) => {
          handleTask(e.target.value);
        }}
        type="text"
        value={task}
        placeholder="New Task"
      />

      <button onClick={handleData}>Add Task</button>
    </>
  );
};

export { TodoInput };

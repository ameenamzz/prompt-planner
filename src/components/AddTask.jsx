import React, { useState } from "react";

const AddTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  //   console.log(taskInput)
  const handleAddTask = () => {
    setTaskInput(taskArray.push(taskInput));
    setTaskInput("")
    console.log(taskArray);
  };

  return (
    <div className="flex justify-center mt-40">
      <div>
        <input
          value={taskInput}
          type="text"
          placeholder="Type here"
          className="input w-96"
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <div className="mt-5">
          <button className=" btn btn-neutral w-full" onClick={handleAddTask}>
            Add Task
          </button>
          <button className="btn btn-primary w-full">
            Ask Ai to Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

import React, { createContext, useState } from "react";
import ListTask from "./ListTask";
import CompletedTask from "./CompletedTask";
export const ListContext = createContext();
const AddTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [doneTask, setDoneTask] = useState([]);
  const handleAddTask = () => {
    if (taskInput === "") return null;
    setTaskInput(taskArray.push(taskInput));
    setTaskInput("");
  };

  return (
    <ListContext.Provider value={{ setTaskArray, setDoneTask, doneTask }}>
      <>
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
              <button
                className=" btn btn-neutral w-full"
                onClick={handleAddTask}
              >
                Add Task
              </button>
              <button className="btn btn-primary w-full">
                Ask Ai to Create Task
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-20">
          {taskArray.length === 0 ? (
            <h1 className="flex justify-center">No task pending</h1>
          ) : (
            <h1 className="flex justify-center">Tasks Pending</h1>
          )}
          {taskArray.map((list) => (
            <ListTask key={list} data={list} />
          ))}
        </div>
      </>
      {doneTask.length != 0 && (
        <div className="mt-10">
          <div className="flex justify-center">
            <h1>Completed Task</h1>
          </div>

          {doneTask.map((task) => (
            <CompletedTask key={task} doneTask={task} />
          ))}
        </div>
      )}
    </ListContext.Provider>
  );
};

export default AddTask;

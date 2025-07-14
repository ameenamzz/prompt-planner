import React, { useContext } from "react";
import { ListContext } from "./AddTask";

const ListTask = ({ data }) => {
  const setTaskArray = useContext(ListContext);
  const handleRemoveTask = (taskToRemove) => {
    setTaskArray((prevTasks) => prevTasks.filter((t) => t !== taskToRemove));
  };
  return (
    <div className="flex justify-center mt-2 ">
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body flex flex-row ">
          <input type="checkbox" className="checkbox checkbox-success" />
          <p className="w-40 break-words px-2">{data}</p>
          <button
            className="btn btn-error btn-sm"
            onClick={() => handleRemoveTask(data)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListTask;

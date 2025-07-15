import React, { useContext, useState } from "react";
import { ListAiContext } from "./AiComponent";
const CompletedAiTask = ({ doneTask }) => {
  const { setTaskArray, setDoneTask } = useContext(ListAiContext);
  const [checked, setChecked] = useState(true);

  const handleRemoveTask = (taskToRemove) => {
    setDoneTask((prevTasks) => prevTasks.filter((t) => t !== taskToRemove));
  };

  const handleCheck = (tastToAdd) => {
    setChecked(!checked);
    setTaskArray((prevTask) => [...prevTask, tastToAdd]);
    setDoneTask((prevTasks) => prevTasks.filter((t) => t !== tastToAdd));
  };

  return (
    <div>
      <>
        <div className="flex justify-center mt-2 ">
          <div className="card card-dash bg-base-300 w-96">
            <div className="card-body flex flex-row ">
              {checked ? (
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-success"
                  onClick={() => handleCheck(doneTask)}
                />
              ) : (
                <input
                  type="checkbox"
                  className="checkbox checkbox-success"
                  onClick={() => handleCheck(doneTask)}
                />
              )}
              <p
                className={
                  checked
                    ? "w-40 break-words px-2 line-through opacity-45"
                    : "w-40 break-words px-2"
                }
              >
                {doneTask}
              </p>
              <button
                className="btn btn-error btn-sm"
                onClick={() => handleRemoveTask(doneTask)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CompletedAiTask;

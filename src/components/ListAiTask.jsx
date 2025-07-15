import { useContext } from "react";
import { ListAiContext } from "./AiComponent";

const ListAiTask = ({ data }) => {
  const { setTaskArray, setDoneTask } = useContext(ListAiContext);
  const handleRemoveTask = (taskToRemove) => {
    setTaskArray((prevTasks) => prevTasks.filter((t) => t !== taskToRemove));
  };

  const handleCheckBox = (taskToRemove) => {
    // setTaskDone(!taskDone);
    setTaskArray((prevTasks) => prevTasks.filter((t) => t !== taskToRemove));
    setDoneTask((prevTask) => [...prevTask, taskToRemove]);
    // console.log(doneTask);
  };
  return (
    <>
      <div className="flex justify-center mt-2 ">
        <div className={"card card-dash bg-base-300 w-96"}>
          <div className="card-body flex flex-row ">
            <input
              type="checkbox"
              className="checkbox checkbox-success"
              onClick={() => handleCheckBox(data)}
            />
            <p className={"w-40 break-words px-2"}>{data}</p>
            <button
              className="btn btn-error btn-sm"
              onClick={() => handleRemoveTask(data)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAiTask;

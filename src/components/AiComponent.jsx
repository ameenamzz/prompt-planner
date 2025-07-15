import React, { createContext, useRef, useState } from "react";
import ListAiTask from "./ListAiTask";
import CompletedAiTask from "./CompletedAiTask";
import genAI from "../utils/gemini";
export const ListAiContext = createContext();

const AiComponent = () => {
  const [taskInput, setTaskInput] = useState();
  const [taskArray, setTaskArray] = useState([]);
  const [doneTask, setDoneTask] = useState([]);
  const taskPrompt = useRef(null);

  const handleAddTask = async () => {
    // if (taskInput === "") return null;
    const gptQuery =
      "Act as a smart Task Planner. Based on the following user input, generate a list of 5 clear and concise to-do tasks that match the intent. :" +
      taskPrompt.current.value +
      ". Output format: strictly 5 tasks, comma-separated. No numbering, no new lines, no extra explanations, no greetings. Only return the task list. Example: Buy groceries, Call mom, Finish React project, Book dentist appointment, Water the plants";
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    }); // or gemini-1.5-pro, gemini-1.5-flash
    const result = await model.generateContent(gptQuery);
    const response = result.response;
    const text = await response.text().trim();
    const finalOuptut = text.split(",");
    console.log("fi", finalOuptut);

    setTaskArray((prev) => [...prev, ...finalOuptut]);
    console.log("taskarray", taskArray);
  };

  return (
    <ListAiContext.Provider value={{ setTaskArray, setDoneTask, doneTask }}>
      <div>
        <div className="flex justify-center">AI PLANNER</div>
        <div className="flex justify-center mt-40">
          <div>
            <input
              ref={taskPrompt}
              type="text"
              placeholder="Type here"
              className="input w-96"
            />
            <div className="mt-5">
              <button
                className="btn btn-primary w-full"
                onClick={handleAddTask}
              >
                Generate Task
              </button>
            </div>
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
          <ListAiTask key={list} data={list} />
        ))}
      </div>
      {doneTask.length != 0 && (
        <div className="mt-10">
          <div className="flex justify-center">
            <h1>Completed Task</h1>
          </div>

          {doneTask.map((task) => (
            <CompletedAiTask key={task} doneTask={task} />
          ))}
        </div>
      )}
    </ListAiContext.Provider>
  );
};

export default AiComponent;

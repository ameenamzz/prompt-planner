import React from "react";

const AddTask = () => {
  return (
    <div className="flex justify-center mt-40">
      <div>
        <input type="text" placeholder="Type here" className="input w-96" />
        <div className="">
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

import React, { useState } from "react";

const CompletedTask = ({ doneTask }) => {
  const [checked, setChecked] = useState(true);
  const handleCheck = () => {
    setChecked(!checked);
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
                  onClick={handleCheck}
                />
              ) : (
                <input type="checkbox" className="checkbox checkbox-success" />
              )}
              <p className="w-40 break-words px-2">{doneTask}</p>
              <button className="btn btn-error btn-sm">x</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CompletedTask;

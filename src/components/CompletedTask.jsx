import React from "react";

const CompletedTask = () => {
  return (
    <div>
      <>
        <div className="flex justify-center mt-2 ">
          <div className="card card-dash bg-base-300 w-96">
            <div className="card-body flex flex-row ">
              <input type="checkbox" className="checkbox checkbox-success" />
              <p className="w-40 break-words px-2">hello</p>
              <button className="btn btn-error btn-sm">x</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CompletedTask;

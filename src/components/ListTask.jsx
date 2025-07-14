import React from "react";

const ListTask = ({ data }) => {
  return (
    <div className="flex justify-center mt-2 ">
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body flex flex-row ">
          <input
            type="checkbox"
            className="checkbox checkbox-success"
          />
          <p className="w-40 break-words">{data}</p>
        </div>
      </div>
    </div>
  );
};

export default ListTask;

import React from "react";

const ListTask = ({ data }) => {
  return (
    <div className="flex justify-center mt-2">
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body">
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};

export default ListTask;

import React from "react";
import Theme from "./Theme";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-mono">Prompt Planner</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:bg-transparent focus:bg-transparent active:bg-transparent" >
              Link
            </a>
          </li>
          <li>
            <Theme />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

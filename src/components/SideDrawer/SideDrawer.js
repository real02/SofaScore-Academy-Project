import React from "react";

import "./SideDrawer.css";
import { NavLink } from "react-router-dom";
import { LogoutButton } from "../Toolbar/LogoutButton";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <button>My profile</button>
        </li>
        <li>
          <NavLink to="/myLeagues">My Leagues</NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;

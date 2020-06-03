import React, { useCallback, useState } from "react";

import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  let drawerClasses = "side-drawer";
  // console.log(props.show)
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  //else {
  //   drawerClasses = "side-drawer open"
  // }
  // console.log(drawerClasses)

  // const memoizedCallback = useCallback(
  //   () => {
  //     if(props.show) {
  //       drawerClasses = 'side-drawer'
  //     } else {
  //       drawerClasses = ""
  //     }
  //   },
  //   [props.show],
  // );
  return (
    <nav className={drawerClasses}>
      <ul>
        {props.pageType === "home" ? (
          <>
            <li>
              <Link to="/myLeagues">My Leagues</Link>
            </li>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <Link to="#">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <Link to="#">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default SideDrawer;

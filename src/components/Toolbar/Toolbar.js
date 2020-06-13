import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.css"
import { Link } from "react-router-dom";
import { LogoutButton } from "./LogoutButton";

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerToggleClickHandler}/>
      </div>
      <div className="toolbar-logo"> 
        <a href="/">SOFASCORE LEAGUES</a>
      </div>
      <div className="spacer" />
      <div className="toolbar-navigation-items">
        <ul>
          {window.location.pathname === "/" ? (
            <>
            <li><Link to={`/myLeagues`}>My Leagues</Link></li>
            <li><a href="/">My Profile</a></li>
            <li><LogoutButton/></li>
            </>
          ) : (
            <>
            <li><a href="/">My Profile</a></li>
            <li><LogoutButton/></li>
            </>
          )
        }
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar

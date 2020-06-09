import React, { useState } from "react"
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";

// ukomponirati onaj zajednicki dio, header i sidedrawer + backdrop

const Drawer = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  return (
    <>
      <Toolbar
        drawerToggleClickHandler={drawerToggleClickHandler}
      />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && (
        <>
          <Backdrop click={backdropClickHandler} />
        </>
      )}
    </>
  );
};

export default Drawer

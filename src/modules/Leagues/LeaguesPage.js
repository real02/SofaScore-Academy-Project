import React, { useState } from "react";

import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";

export function LeaguesPage() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen({ sideDrawerOpen: false });
  };

  return (
    <div style={{ height: "100%" }}>
      <Toolbar pageType={`myLeagues`} drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer pageType={`myLeagues`} show={sideDrawerOpen} />
      {sideDrawerOpen && (
        <>
          <Backdrop click={backdropClickHandler} />
        </>
      )}
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content</p>
      </main>
    </div>
  );
}

export default LeaguesPage;

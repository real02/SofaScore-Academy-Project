import React from "react";

import Drawer from "../../components/Drawer/Drawer";

export function HomePage() {
  return (
    <div style={{ height: "100%" }}>
      <Drawer />
      <main style={{ marginTop: "64px" }}>
        <p>Welcome to your home page</p>
      </main>
    </div>
  );
}

export default HomePage;

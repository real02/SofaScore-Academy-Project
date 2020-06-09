import React from "react";

import Drawer from "../../components/Drawer/Drawer";
import CreateLeagueButton from "./CreateLeagueButton";

import "./leagues.css";

export function LeaguesPage() {
  return (
    <div className="leagues-page">
      <CreateLeagueButton />
      <Drawer />
    </div>
  );
}

export default LeaguesPage;

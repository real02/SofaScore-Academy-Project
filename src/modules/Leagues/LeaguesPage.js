import React from "react";

import Drawer from "../../components/Drawer/Drawer";
import CreateLeagueButton from "./CreateLeagueButton";

import "./leagues.css";
import LeagueItem from "./LeagueItem";

export function LeaguesPage() {
  return (
    <div className="leagues-page">
      <CreateLeagueButton />
      <Drawer />
      <LeagueItem />
    </div>
  );
}

export default LeaguesPage;

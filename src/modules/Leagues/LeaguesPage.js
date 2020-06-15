import React, { useEffect, useRef } from "react";

import Drawer from "../../components/Drawer/Drawer";
import CreateLeagueButton from "./CreateLeagueButton";

import "./leagues.css";
import LeagueItem from "./LeagueItem";
import { useSelector } from "react-redux";

export function LeaguesPage() {
  const user = useSelector((state) => state.user);
  const token = user.token;

  var myLeaguesRef = useRef([]);

  useEffect(() => {
    fetch("https://private-leagues-api.herokuapp.com/api/leagues", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-App-Key": "dino",
      },
    }).then((resp) =>
      resp.json().then((data) => {
        var i;
        for (i = 0; i < data.length; i++) {
          // console.log(data[i])
          myLeaguesRef.current.push(data[i]);
        }
      })
    );
    // eslint-disable-next-line
  }, []);
  return (
    <div className="leagues-page">
      <CreateLeagueButton />
      <Drawer />
      <div id="background">
        {/* <div className="kontejner"> */}
          {/* {console.log(myLeaguesRef.current)}
          {myLeaguesRef.current.map((league) => (
            <LeagueItem key={league.id} liga={league} />
          ))} */}

          <LeagueItem />
        {/* </div> */}
      </div>
    </div>
  );
}

export default LeaguesPage;

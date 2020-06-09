import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./leagues.css";

const CreateLeagueButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/myLeagues/createNewLeague");
  };
  return (
    <button className="new-league-button">
      <Link to="/myLeagues/createNewLeague" onClick={handleClick}>
        Create a League
      </Link>
    </button>
  );
};

export default CreateLeagueButton;

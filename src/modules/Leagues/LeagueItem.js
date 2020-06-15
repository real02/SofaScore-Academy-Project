import React from "react";

import "./leagues.css";

export function LeagueItem(props) {
  //   const league = props.liga;

  return (
    <div className="list-item">
      <div className="leftSection">
        <h1>Liga prvaka</h1>
        <h2>Utorkom i srijedom</h2>
        {/* <h1>{league.name}</h1>
        <h2>{league.data}</h2> */}
      </div>
      <div className="rightSection">
        <button className="subsection">Popis Igrača</button>
        <button className="subsection">Sve Utakmice</button>
        <button className="subsection">Izbriši ligu</button>
      </div>
    </div>
  );
}

export default LeagueItem;

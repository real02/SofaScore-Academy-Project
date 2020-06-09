import React from "react";

import "./createNewLeague.css";

// ekran za dodavanje nove lige
const CreateNewLeague = () => {
  return (
    <div className="outOfMargin">
      <div className="cnt">
        <h1>Add new league</h1>
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="League Name"
            className="form-field"
          />
          <input
            type="text"
            name="data"
            placeholder="Number of players"
            className="form-field"
          />
          <button>CREATE LEAGUE</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewLeague;

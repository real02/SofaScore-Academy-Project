import React from "react";

import "./createNewLeague.css";
import useFormValidation from "../../utils/useFormValidation";
import validateLeagueInput from "../../utils/validateLeagueInput";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewLeague } from "../../redux/actions";
import { reqOptions } from "../../api/reqOptAuthorization";

const INITIAL_STATE = {
  name: "",
  data: "",
};

const CreateNewLeague = () => {
  const { handleChange, handleBlur, values, errors } = useFormValidation(
    INITIAL_STATE,
    validateLeagueInput
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const hasErrors = !!Object.keys(errors).length;

  const user = useSelector((state) => state.user);
  const token = user.token;

  const handleSubmit = () => {
    if (!hasErrors) {
      fetch(
        "https://private-leagues-api.herokuapp.com/api/leagues",
        reqOptions(values, token)
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            history.push("*");
          } else {
            // const leagueObject = {
            //   leagueName: values.name,
            //   leagueInfo: values.data,
            // };
            console.log(values.name);
            console.log(values.data);
            
            
            dispatch(createNewLeague(values));
            history.push("/myLeagues");
          }
        });
    }
  };

  return (
    <div className="outOfMargin">
      <h1>Add new league</h1>
      <div className="cnt">
        <div className="rct">
          <div className="create-league-form">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="name"
              value={values.name}
              placeholder="League Name"
              className={`create-league-form-field ${
                errors.name && "error-input"
              }`}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="data"
              value={values.data}
              placeholder="League Info"
              className={`create-league-form-field ${
                errors.data && "error-input"
              }`}
            />
            {errors.data && <p className="error-text">{errors.data}</p>}
            <button onClick={handleSubmit} disabled={hasErrors}>
              CREATE LEAGUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewLeague;

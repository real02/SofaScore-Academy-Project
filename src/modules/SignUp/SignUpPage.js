import React from "react";
import useFormValidation from "../../utils/useFormValidation";
import validateAuth from "../../utils/validateAuth";
import { useDispatch } from "react-redux";
import "../LoginPage/loginPage.css";
import { useHistory } from "react-router-dom";
import { requestOptions } from "../../api/requestOptions";
import { setUser } from "../../redux/actions";

const INITIAL_STATE = {
  username: "",
  password: "",
};

const SignUpPage = () => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormValidation(INITIAL_STATE, validateAuth);

  const dispatch = useDispatch();
  const history = useHistory();

  const hasErrors = !!Object.keys(errors).length;

  const handleSubmit = () => {
    if (!hasErrors) {
      fetch(
        "https://private-leagues-api.herokuapp.com/api/register",
        requestOptions(values)
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (data.errors) {
            // handle errors
          } else {
            dispatch(setUser(data));
            history.push("/login");
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="section shadow">
        <div className="logo-right-part-background">
          <div className="logo-left-part-background">
            <div className="logo-back-of-sofa"></div>
            <div className="logo-sofa-seat"></div>
          </div>
        </div>
        <div className="form">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="username"
            value={values.username}
            placeholder="Username/email"
            className={`form-field animation a3 ${
              errors.username && "error-input"
            }`}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password"
            value={values.password}
            placeholder="Password"
            className={`form-field animation a4 ${
              errors.password && "error-input"
            }`}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
          <button
            className="animation a6"
            onClick={handleSubmit}
            disabled={hasErrors}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

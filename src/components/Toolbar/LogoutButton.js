import React from "react"

import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions";
import { Link } from "react-router-dom";

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };
  return <Link to="/login" onClick={handleClick}>Logout</Link>;
};

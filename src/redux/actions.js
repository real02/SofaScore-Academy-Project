import { useSelector } from "react-redux";
import axios from "axios";

export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const CREATE_NEW_LEAGUE = "CREATE_NEW_LEAGUE";
export const DELETE_LEAGUE = "DELETE_LEAGUE";
export const GET_LEAGUES = "GET_LEAGUES";

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  user: {},
});

export const createNewLeague = (league) => ({
  type: CREATE_NEW_LEAGUE,
  league
});

export const getMyLeagues = () => async (dispatch) => {
  const user = useSelector((state) => state.user);
  const token = user.token;
  const res = await fetch(
    "https://private-leagues-api.herokuapp.com/api/leagues",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-App-Key": "dino",
      },
    }
  );
  dispatch({
    type: GET_LEAGUES,
    payload: res.data,
  });
};

export const deleteLeague = (id) => async (dispatch) => {
  if (window.confirm("Are you sure? This will delete the entire league!")) {
    await axios.delete(
      `https://private-leagues-api.herokuapp.com/api/leagues/:${id}`
    );
    dispatch({
      type: DELETE_LEAGUE,
      payload: id,
    });
  }
};

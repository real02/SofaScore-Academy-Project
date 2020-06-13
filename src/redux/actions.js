import axios from "axios"

export const SET_USER = "SET_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const CREATE_NEW_LEAGUE = "CREATE_NEW_LEAGUE"

export const GET_LEAGUES = "GET_LEAGUES"

export const setUser = user => ({
  type: SET_USER,
  user
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
  user: {}
})

export const createNewLeague = id => ({
  type: CREATE_NEW_LEAGUE,
  id
})

export const getMyLeagues = () => async dispatch => {
  const res = await axios.get("https://private-leagues-api.herokuapp.com/api/leagues");
  dispatch({
    type: GET_LEAGUES,
    payload: res.data
  });
};



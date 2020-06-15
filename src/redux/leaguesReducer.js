import { GET_LEAGUES, CREATE_NEW_LEAGUE, DELETE_LEAGUE } from "./actions";

const INITIAL_STATE = {
  leagues: [],
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_LEAGUES:
      return { ...state, leagues: action.payload };
    case CREATE_NEW_LEAGUE:
      // state.leagues.push(action.league);
      return {...state, leagues: action.league}
    case DELETE_LEAGUE:
      return {
        ...state,
        leagues: state.leagues.filter((id) => id !== action.payload), //popraviti
      };
    default:
      return state;
  }
}

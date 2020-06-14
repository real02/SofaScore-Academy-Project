import { GET_LEAGUES, CREATE_NEW_LEAGUE, DELETE_LEAGUE } from "./actions";

const INITIAL_STATE = {
  leagues: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LEAGUES:
      return { ...state, leagues: action.payload };
    case CREATE_NEW_LEAGUE:
      const id = action.id;
      return { ...state, leagues: state.leagues.push(id) };
    case DELETE_LEAGUE:
      return {
        ...state,
        leagues: state.leagues.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
}

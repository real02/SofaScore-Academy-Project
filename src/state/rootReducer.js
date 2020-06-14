import { combineReducers } from "redux";

import reducer from "../redux/userReducer";
import leaguesReducer from "../redux/leaguesReducer";

export const rootReducer = combineReducers({
  user: reducer,
  leagues: leaguesReducer,
  // players: playersReducer,
  // events: eventsReducer
});

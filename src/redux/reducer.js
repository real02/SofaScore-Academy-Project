import { SET_USER, LOGOUT_USER, CREATE_NEW_LEAGUE } from "./actions";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    case LOGOUT_USER:
      return {};
    case CREATE_NEW_LEAGUE:
      const id = action.id;

      if (state.includes(id)) {
        return state;
      }

      return { ...state, id };
    default:
      return state;
  }
}

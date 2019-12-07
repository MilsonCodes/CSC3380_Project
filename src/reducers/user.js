import { LOGGED_OUT, LOGGED_IN, USER, RESTAURANT } from "../actions/types";
import { cookies } from "../api";

export const user = (
  state = {
    loggedIn: false,
    portal: cookies.get("portal"),
    name: null
  },
  action
) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        ...action.payload
      };
    case LOGGED_OUT:
      return { loggedIn: false };
    case USER:
      return {
        ...state,
        portal: USER
      };
    case RESTAURANT:
      return {
        ...state,
        portal: RESTAURANT
      };
    default:
      return state;
  }
};

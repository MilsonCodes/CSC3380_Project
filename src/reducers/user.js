import {
  LOGGED_OUT,
  LOGGED_IN,
  USER,
  RESTAURANT,
  EDIT
} from "../actions/types";
import { cookies } from "../api";

export const user = (
  state = {
    loggedIn: true,
    portal: cookies.get("portal"),
    name: cookies.get("name") || "LSU",
    password: null,
    restaurant: true,
    favorites: []
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
    case EDIT:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

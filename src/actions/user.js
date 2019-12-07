import { cookies } from "../api";
import { LOGGED_IN, LOGGED_OUT, USER, RESTAURANT } from "./types";

// Action creators
export const logIn = () => ({
  type: LOGGED_IN,
  loggedIn: true
});

export const setName = name => ({
  name: name
});

export function logOut() {
  cookies.remove("loggedIn");
  cookies.remove("portal");
  cookies.remove("token");
  return { type: LOGGED_OUT, loggedIn: false };
}

export function setUserPortal() {
  cookies.set("portal", USER, { path: "/", maxAge: 1.814e3 });
  return { type: USER, portal: USER };
}

export function setRestaurantPortal() {
  cookies.set("portal", RESTAURANT, { path: "/", maxAge: 1.814e3 });
  return { type: RESTAURANT, portal: RESTAURANT };
}
export const togglePortal = () => (dispatch, getState) => {
  cookies.set(
    "portal",
    getState().user.portal === RESTAURANT ? USER : RESTAURANT,
    { path: "/", maxAge: 1.814e3 }
  );
  dispatch({ type: "TOGGLE_PORTAL", portal: null });
};

// -----------------------------
// Auth Action Types
// -----------------------------

export const TOGGLE_AUTH_BOX = (data) => ({
  type: "TOGGLE_AUTH_BOX",
  payload: data,
});

export const AUTH_READY = () => ({type: "AUTH_READY"})

export const SET_LOGIN_MODE = () => ({ type: "SET_LOGIN_MODE" });

export const SET_REGISTER_MODE = () => ({ type: "SET_REGISTER_MODE" });

export const LOGIN_SUCCESS = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: data,
});

export const LOGOUT = () => ({ type: "LOGOUT" });

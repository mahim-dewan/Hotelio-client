// -----------------------------
// Initial Auth State
// -----------------------------
export const initialAuthState = {
  isOpenAuthBox: false,
  mode: "login",
  user: null,
  isAuthReady: false,
};

// -----------------------------
// Auth Reducer
// -----------------------------
export const authReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH_BOX":
      return {
        ...state,
        mode: "login",

        isOpenAuthBox: !state.isOpenAuthBox,
      };

    case "AUTH_READY":
      return {
        ...state,
        isAuthReady: true,
      };

    case "SET_LOGIN_MODE":
      return { ...state, mode: "login" };

    case "SET_REGISTER_MODE":
      return { ...state, mode: "register" };

    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
};

export const initialAuthState = {
  isOpenAuthBox: false,
  isLoginMode: true,
  isRegisterMode: false,
  user: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "auth_box":
      return {
        ...state,
        isLoginMode: true,
        isRegisterMode: false,
        isOpenAuthBox: !state.isOpenAuthBox,
      };

    case "login_mode":
      return { ...state, isLoginMode: true, isRegisterMode: false };

    case "register_mode":
      return { ...state, isLoginMode: false, isRegisterMode: true };

    default:
      return state;
  }
};

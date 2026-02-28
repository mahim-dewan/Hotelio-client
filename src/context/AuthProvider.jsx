"use client";
import { api } from "@/lib/apis";
import { LOGIN_SUCCESS } from "@/reducers/auth/actions";
import { authReducer, initialAuthState } from "@/reducers/auth/reducer";
import { createContext, useContext, useEffect, useReducer } from "react";

// -----------------------------------
// Create Auth Context
// -----------------------------------
const AuthContext = createContext(null);

// -----------------------------------
// Auth Provider Component
// -----------------------------------
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // -----------------------------------
  // Verify user on initial app load
  // (checks token stored in cookie)
  // -----------------------------------
  useEffect(() => {
    const verifyUser = async () => {
      const res = await api.verifyToken();
      if (res?.success) {
        dispatch(LOGIN_SUCCESS(res?.data));
        return;
      }
    };

    verifyUser();
  }, [state.isOpenAuthBox]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// -----------------------------------
// Custom Hook for using auth context
// -----------------------------------
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

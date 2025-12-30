"use client";
import { authReducer, initialAuthState } from "@/reducers/authReducer";
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState );
  return <AuthContext value={{ state, dispatch }}>{children}</AuthContext>;
};

// custom hook
export const useAuth = ()=> useContext(AuthContext)

export default AuthProvider;

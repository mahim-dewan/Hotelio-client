"use client";

import { useAuth } from "@/context/AuthProvider";
import Button from "./Button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useEffect } from "react";
import { X } from "lucide-react";
import {
  SET_LOGIN_MODE,
  SET_REGISTER_MODE,
  TOGGLE_AUTH_BOX,
} from "@/reducers/auth/actions";

// -----------------------------------
// Authentication Modal Component
// -----------------------------------
const AuthModal = () => {
  const { state, dispatch } = useAuth();
  const { isOpenAuthBox, mode } = state;

  // -----------------------------------
  // Disable background scroll when modal is open
  // -----------------------------------
  useEffect(() => {
    if (isOpenAuthBox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenAuthBox]);

  if (!isOpenAuthBox) return null;

  return (
    // Modal backdrop
    <div className="bg-dark/80 fixed inset-0 flex justify-center overflow-">
      {/* Modal container */}
      <div className="m-5 flex flex-col items-start  gap-2 w-80 md:w-96 lg:w-112.5 mt-20">
        {/* Header section */}
        <div className="flex items-start justify-between w-full">
          {/* Login / Register toggle buttons */}
          <div className="flex items-center gap-4 w-fit bg-primary text-light px-4 py-2 rounded-lg">
            <Button
              onClick={() => dispatch(SET_LOGIN_MODE())}
              className={`py-1 px-3 ${
                mode === "login" && "border border-muted rounded-md"
              }`}
            >
              Login
            </Button>
            <Button
              onClick={() => dispatch(SET_REGISTER_MODE())}
              className={`py-1 px-3 ${
                mode === "register" && "border border-muted rounded-md"
              }`}
            >
              Register
            </Button>
          </div>

          {/* Close modal button */}
          <X
            className="text-light cursor-pointer"
            onClick={() => dispatch(TOGGLE_AUTH_BOX())}
          />
        </div>

        {/* Conditionally render forms */}
        {mode === "login" && <LoginForm />}
        {mode === "register" && <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthModal;

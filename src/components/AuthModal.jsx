"use client";

import { useAuth } from "@/context/AuthProvider";
import Button from "./Button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useEffect } from "react";
import { X } from "lucide-react";

const AuthModal = () => {
  const { state, dispatch } = useAuth();
  const { isOpenAuthBox, isLoginMode, isRegisterMode } = state;

  useEffect(() => {
    if (isOpenAuthBox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenAuthBox]);

  if (!isOpenAuthBox) return null;

  return (
    <div className="bg-dark/80 fixed inset-0 flex justify-center overflow-">
      <div className="m-5 flex flex-col items-start  gap-2 w-80 md:w-96 lg:w-112.5 mt-20">
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center gap-4 w-fit bg-primary text-light px-4 py-2 rounded-lg">
            <Button
              onClick={() => dispatch({ type: "login_mode" })}
              className={`py-1 px-3 ${
                isLoginMode && "border border-muted rounded-md"
              }`}
            >
              Login
            </Button>
            <Button
              onClick={() => dispatch({ type: "register_mode" })}
              className={`py-1 px-3 ${
                isRegisterMode && "border border-muted rounded-md"
              }`}
            >
              Register
            </Button>
          </div>
          <X
            className="text-light cursor-pointer"
            onClick={() => dispatch({ type: "auth_box" })}
          />
        </div>
        {isLoginMode && <LoginForm />}
        {isRegisterMode && <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthModal;

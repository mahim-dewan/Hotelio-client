import React, { useState } from "react";
import LoginForm from "../forms/LoginForm";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import useLogin from "@/hooks/useLogin";

const LoginContainer = () => {
  const [isPasswordResetMode, setIsPasswordResetMode] = useState(false);
  const loginHook = useLogin();

  return (
    <div className="w-full">
      {isPasswordResetMode ? (
        <ForgotPasswordForm
          {...loginHook}
          setIsPasswordResetMode={setIsPasswordResetMode}
        />
      ) : (
        <LoginForm
          {...loginHook}
          setIsPasswordResetMode={setIsPasswordResetMode}
        />
      )}
    </div>
  );
};

export default LoginContainer;

import { useAuth } from "@/context/AuthProvider";
import { api } from "@/lib/apis";
import { TOGGLE_AUTH_BOX } from "@/reducers/auth/actions";
import { emailSchema } from "@/schemas/fields.schema";
import { useState } from "react";
import toast from "react-hot-toast";

export const PASSWORD_RESET_STEPS = {
  RESET: "reset",
  REQUEST: "request",
};
const useLogin = () => {
  const [error, setError] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const { dispatch } = useAuth();

  // Handles user login
  const login = async (payload) => {
    const res = await api.login(payload);

    if (res?.success && res?.message) {
      toast.success(res.message);
      dispatch(TOGGLE_AUTH_BOX());
      return;
    }
    // Show Error
    toast.error(res?.message || "Login failed");
  };

  // Sends OTP for password reset
  const forgotRequest = async (payload) => {
    setIsDisable(true);
    const { success, data, error } = emailSchema.safeParse(payload);
    if (!success) {
      setError("Email is not valid.");
      setIsDisable(false);
      return;
    }

    const res = await api.forgotPassword({ email: data });

    if (res.success) {
      toast.success(res?.message);
      setIsDisable(false);
      return true;
    }

    toast.error(res?.message);
    setIsDisable(false);
    return false;
  };

  // Handles password reset submission
  const resetSubmit = async (payload) => {
    const res = await api.resetPassword(payload);

    if (res.success) {
      toast.success(res?.message);
      return true;
    }

    toast.error(res?.message);
    return false;
  };

  //  Resend OTP
  const otpResend = async (payload) => {
    const res = await api.resetOtpResend(payload);

    if (res?.success) {
      toast.success(res?.message);
      return true;
    }

    toast.error(res?.message);
    return false;
  };

  return { login, error, isDisable, forgotRequest, resetSubmit, otpResend };
};

export default useLogin;

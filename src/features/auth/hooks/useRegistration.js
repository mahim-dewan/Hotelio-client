import { useAuth } from "@/context/AuthProvider";
import { apiClient } from "@/lib/apis-client";
import { TOGGLE_AUTH_BOX } from "@/reducers/auth/actions";
import { useState } from "react";
import toast from "react-hot-toast";

//  Step configuration
export const AUTH_STEPS = {
  REGISTER: "register",
  OTP: "otp",
};

/**
 * Custom hook responsible for handling
 * registration verification & OTP resend logic.
 *
 * Keeps API logic outside UI components.
 */
const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuth();
  const [step, setStep] = useState(AUTH_STEPS.REGISTER);

  /**
   * Request user registration
   * @param {Object} payload
   * @returns {Boolean} success status
   */
  const requestRegister = async (payload) => {
    const res = await apiClient.requestRegister(payload);

    if (res?.success) {
      toast.success(res?.message);
      return true;
    }

    // Show error
    toast.error(res?.message || "Something went wrong.");
    return false;
  };

  /**
   * Verify user registration with OTP
   * @param {Object} payload
   * @returns {Boolean} success status
   */
  const verifyRegistration = async (payload) => {
    if (!payload) return false;
    setIsLoading(true);

    const res = await apiClient.verifyRegister(payload);
    if (res?.success) {
      toast.success(res?.message);
      dispatch(TOGGLE_AUTH_BOX());
      setIsLoading(false);
      return true;
    }

    // Show error
    toast.error(res?.message || "Something went wrong.");
    setIsLoading(false);
    return false;
  };

  /**
   * Resend registration OTP
   * @param {Object} payload
   * @returns {Boolean} success status
   */
  const registerOtpResend = async (payload) => {
    if (!payload?.email) return;

    const res = await apiClient.resendRegistrationOtp(payload);
    if (res?.success) {
      toast.success(res?.message);
      return;
    }

    // Show error
    toast.error(res?.message || "Something went wrong.");
  };

  return {
    isLoading,
    step,
    setStep,
    verifyRegistration,
    registerOtpResend,
    requestRegister,
  };
};

export default useRegistration;

"use client";
import { useState } from "react";
import OtpInputBox from "../../../shared/forms/OtpInputBox";
import RegisterForm from "./RegisterForm";
import useRegistration, {
  AUTH_STEPS,
} from "@/features/auth/hooks/useRegistration";

// -----------------------------------
// RegisterForm Component
// -----------------------------------
const RegisterContainer = () => {
  const [userData, setUserData] = useState(null);
  const { isLoading, step, setStep, verifyRegistration, registerOtpResend } =
    useRegistration();

  // Handles OTP verification submission
  const handleRegistration = async (otp) => {
    if (!userData) return;
    if (otp.includes("")) return;

    const payload = {
      ...userData,
      otp: otp.join(""),
    };

    await verifyRegistration(payload);
  };

  /**
   * Handles resend OTP
   */
  const handleResend = () => {
    if (!userData?.email) return;
    registerOtpResend({ email: userData.email });
  };

  return (
    <div className="bg-primary text-light w-full md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      {/* Step Indicators */}
      <div className="flex items-center justify-center gap-4 my-4">
        {[AUTH_STEPS.REGISTER, AUTH_STEPS.OTP].map((item) => (
          <div
            key={item}
            className={`w-2 h-2 rounded-full ${
              step === item ? "bg-light" : "border border-light"
            }`}
          />
        ))}
      </div>

      {step === AUTH_STEPS.REGISTER && (
        <RegisterForm
          setUserData={setUserData}
          defaultValues={userData}
          setStep={setStep}
        />
      )}

      {step === AUTH_STEPS.OTP && (
        <OtpInputBox
          setStep={setStep}
          onSubmit={handleRegistration}
          onResend={handleResend}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default RegisterContainer;

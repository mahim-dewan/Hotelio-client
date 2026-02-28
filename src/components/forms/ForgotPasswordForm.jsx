import React, { useState } from "react";
import InputField from "./InputField";
import { ChevronsLeft, IdCard, Lock, MailIcon } from "lucide-react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/schemas/auth.schema";
import { PASSWORD_RESET_STEPS } from "@/hooks/useLogin";

const ForgotPasswordForm = ({
  error,
  isDisable,
  forgotRequest,
  resetSubmit,
  otpResend,
  setIsPasswordResetMode,
}) => {
  const [step, setStep] = useState(PASSWORD_RESET_STEPS.REQUEST);
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) });

  const handleForgotRequest = async (e) => {
    e.preventDefault();
    const res = await forgotRequest(email);
    if (res) {
      setStep(PASSWORD_RESET_STEPS.RESET);
    }
  };

  const handleResetSubmit = async (data) => {
    const payload = { email, password: data?.password, otp: data?.otp };

    const result = await resetSubmit(payload);
    if (result) {
      setIsPasswordResetMode(false);
    }
  };

  const handleResend = async () => {
    await otpResend({ email });
  };

  return (
    <div className="bg-primary text-light w-full md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 text-center text-light">
        {step === PASSWORD_RESET_STEPS.REQUEST && "Forgot Password"}
        {step === PASSWORD_RESET_STEPS.RESET && "Reset Password"}
      </h2>

      <div className="flex items-center justify-center gap-4 my-4">
        {[PASSWORD_RESET_STEPS.REQUEST, PASSWORD_RESET_STEPS.RESET].map(
          (currentStep) => (
            <div
              key={currentStep}
              className={`w-2 h-2 rounded-full ${step === currentStep ? "bg-light" : "border border-light"}`}
            ></div>
          ),
        )}
      </div>

      {/* Forgot Password Form*/}
      {step === PASSWORD_RESET_STEPS.REQUEST && (
        <form onSubmit={handleForgotRequest}>
          {/* Email Field  */}
          <InputField
            icon={<MailIcon className="text-muted/30" />}
            type={"email"}
            placeholder={"Email Address"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-orange-600">{error}</p>

          {/* Back button  */}
          <Button
            className={
              "text-dark bg-light p-0.5 px-1 rounded-sm flex items-center my-2"
            }
            onClick={() => setIsPasswordResetMode(false)}
          >
            <ChevronsLeft />
            <span> back</span>
          </Button>

          {/* Submit button */}
          <Button
            type="submit"
            className="w-full mb-3 bg-secondary py-2.5 rounded-full text-light"
            disabled={isDisable}
          >
            Send OTP
          </Button>
        </form>
      )}

      {/* =========================******************Component Devider******************========================== */}

      {/* Reset Password Form*/}
      {step === PASSWORD_RESET_STEPS.RESET && (
        <form onSubmit={handleSubmit(handleResetSubmit)}>
          {/* OTP Field  */}
          <InputField
            icon={<IdCard className="text-muted/30" />}
            type={"number"}
            placeholder={"OTP"}
            {...register("otp")}
          />
          {errors?.otp && (
            <p className="text-orange-600">{errors?.otp.message}</p>
          )}

          {/* New Password Field  */}
          <InputField
            icon={<Lock className="text-muted/30" />}
            type={"password"}
            placeholder={"New Password"}
            {...register("password")}
          />
          {errors?.password && (
            <p className="text-orange-600">{errors?.password.message}</p>
          )}

          {/* New Password Field  */}
          <InputField
            icon={<Lock className="text-muted/30" />}
            type={"password"}
            placeholder={"Confirm Password"}
            {...register("confirm_password")}
          />
          {errors?.confirm_password && (
            <p className="text-orange-600">
              {errors?.confirm_password.message}
            </p>
          )}

          <div className="flex items-center justify-between">
            <Button
              className={
                "text-dark bg-light p-0.5 px-1 rounded-sm flex items-center my-2"
              }
              onClick={() => setStep(PASSWORD_RESET_STEPS.REQUEST)}
            >
              <ChevronsLeft />
              <span> back</span>
            </Button>

            <Button
              className={
                "text-blue-400 underline hover:text-blue-500 active:text-blue-500"
              }
              onClick={handleResend}
            >
              Resend
            </Button>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            className="w-full mb-3 bg-secondary py-2.5 rounded-full text-light"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating Password..." : "Update Password"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordForm;

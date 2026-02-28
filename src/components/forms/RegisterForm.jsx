import React from "react";
import InputField from "./InputField";
import { Lock, MailIcon, User } from "lucide-react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegistration, { AUTH_STEPS } from "@/hooks/useRegistration";

const RegisterForm = ({ setStep, setUserData, defaultValues }) => {
  // Initialize form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema), defaultValues });
  const { requestRegister } = useRegistration();

  // -----------------------------------
  // Handle form submission
  // -----------------------------------
  const handleRegisterRequest = async (data) => {
    const res = await requestRegister(data);
    if (res) {
      setUserData(data);
      setStep(AUTH_STEPS.OTP);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-light">
        Register a new account
      </h2>

      <form onSubmit={handleSubmit(handleRegisterRequest)}>
        {/* Email Field  */}
        <InputField
          icon={<User className="text-muted/30" />}
          type={"text"}
          {...register("name")}
          placeholder={"Full Name"}
        />
        {errors?.name && (
          <p className="text-orange-600">{errors.name.message}</p>
        )}

        {/* Email Field  */}
        <InputField
          icon={<MailIcon className="text-muted/30" />}
          type={"email"}
          {...register("email")}
          placeholder={"Email Address"}
        />
        {errors?.email && (
          <p className="text-orange-600">{errors.email.message}</p>
        )}

        {/* Password Field */}
        <InputField
          icon={<Lock className="text-muted/30" />}
          type={"password"}
          {...register("password")}
          placeholder={"Password"}
        />
        {errors?.password && (
          <p className="text-orange-600">{errors.password.message}</p>
        )}

        {/* Confirm Password Field */}
        <InputField
          icon={<Lock className="text-muted/30" />}
          type={"password"}
          {...register("confirm_password")}
          placeholder={"Confirm Password"}
        />
        {errors?.confirm_password && (
          <p className="text-orange-600">{errors.confirm_password.message}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className={`w-full mb-3 py-2.5 rounded-full text-light ${isSubmitting ? "bg-secondary/50 cursor-not-allowed! text-light/50" : "bg-secondary"}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Register"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;

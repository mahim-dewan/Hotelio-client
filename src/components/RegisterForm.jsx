"use client";

import InputField from "./InputField";
import { Lock, MailIcon, User } from "lucide-react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/apis";
import { useAuth } from "@/context/AuthProvider";
import { SET_LOGIN_MODE } from "@/reducers/auth/actions";
import toast from "react-hot-toast";

// -----------------------------------
// RegisterForm Component
// -----------------------------------
const RegisterForm = () => {
  const { dispatch } = useAuth();

  // Initialize form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema) });

  // -----------------------------------
  // Handle form submission
  // -----------------------------------
  const handleRegister = async (data) => {
    const res = await api.register({
      name: data?.name,
      email: data?.email,
      password: data?.password,
    });

    if (res?.success && res?.message) {
      toast.success("Registration successfull. Please login here.");
      dispatch(SET_LOGIN_MODE());
      return;
    }

    // Show error
    toast.error(res?.message || "Registration failed.");
  };

  return (
    <div className="bg-primary text-light w-full md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      {/* Title  */}
      <h2 className="text-2xl font-semibold mb-6 text-center text-light">
        Register a new account
      </h2>
      <form onSubmit={handleSubmit(handleRegister)}>
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

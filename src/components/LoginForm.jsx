import { Lock, MailIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { assets } from "../../public/assets/assets";
import InputField from "./InputField";
import Button from "./Button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { api } from "@/lib/apis";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthProvider";
import { TOGGLE_AUTH_BOX } from "@/reducers/auth/actions";

// -----------------------------------
// Login Form Component
// -----------------------------------
const LoginForm = () => {
  const {dispatch} = useAuth()
  // Initialize React Hook Form
  const { register, handleSubmit, formState:{isSubmitting} } = useForm();

  // -----------------------------------
  // Handle login form submission
  // -----------------------------------
  const handleLogin = async (data) => {
    const res = await api.login(data);

    if (res?.success && res?.message) {
      toast.success(res.message);
      dispatch(TOGGLE_AUTH_BOX())
      return;
    }
    // Show Error
    toast.error(res?.message || "Login failed");
  };

  return (
    <div className="bg-primary text-light w-full md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 text-center text-light">
        Welcome back to Hotelio
      </h2>

      {/* Login Form */}
      <form onSubmit={handleSubmit(handleLogin)}>
        {/* Email Field  */}
        <InputField
          icon={<MailIcon className="text-muted/30" />}
          type={"email"}
          placeholder={"Email Address"}
          {...register("email", { required: "Email is required" })}
        />
        {/* Password Field */}
        <InputField
          icon={<Lock className="text-muted/30" />}
          type={"password"}
          {...register("password")}
          placeholder={"Password"}
        />

        {/* Forgot password link */}
        <div className="text-right py-4">
          <a className="text-muted underline" href="#">
            Forgot Password
          </a>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          className="w-full mb-3 bg-secondary py-2.5 rounded-full text-light"
        >
          {isSubmitting ? "Trying to login..." : "Login"}
        </Button>
      </form>

      {/* Google OAuth */}
      <Link
        href={`${process.env.NEXT_PUBLIC_BASE_API}/auth/google`}
        className="w-full flex items-center gap-2 justify-center mt-5 bg-dark/30 py-2.5 rounded-full text-white"
      >
        <Image
          className="h-4 w-4 text-amber-300"
          width={400}
          height={400}
          src={assets.googleIcon}
          alt="appleLogo"
        />
        Continue with Google
      </Link>

      {/* Facebook OAuth */}
      <Link
        href={`${process.env.NEXT_PUBLIC_BASE_API}/auth/facebook`}
        type="button"
        className="w-full flex items-center gap-0.5 justify-center my-3 bg-light border border-muted/30 py-2.5 rounded-full text-gray-800"
      >
        <Image
          className="h-4 w-4"
          width={400}
          height={400}
          src={assets.facebookIcon}
          alt="googleFavicon"
        />
        Continue with Facebook
      </Link>
    </div>
  );
};

export default LoginForm;

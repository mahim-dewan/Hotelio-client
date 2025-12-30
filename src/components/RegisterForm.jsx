"use client";

import InputField from "./InputField";
import { Lock, MailIcon, User } from "lucide-react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(registerSchema)})

    console.log(errors);
    
    const handleRegister = async (data)=>{
        console.log(data);
    }

  return (
    <div className="bg-primary text-light w-full md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-light">
        Register a new account
      </h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        {/* Email Field  */}
        <InputField
          icon={<User className="text-muted/30" />}
          type={"text"}
          {...register("full_name")}
          placeholder={"Full Name"}
        />
        {/* Email Field  */}
        <InputField
          icon={<MailIcon className="text-muted/30" />}
          type={"email"}
          {...register("email")}
          placeholder={"Email Address"}
        />
        {/* Password Field */}
        <InputField
          icon={<Lock className="text-muted/30" />}
          type={"password"}
          {...register("password")}
          placeholder={"Password"}
        />
        {/* Confirm Password Field */}
        <InputField
          icon={<Lock className="text-muted/30" />}
          type={"password"}
          {...register("confirm_password")}
          placeholder={"Confirm Password"}
        />

        <Button
          type="submit"
          className="w-full mb-3 bg-secondary py-2.5 rounded-full text-light"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;

import z from "zod";

export const registerSchema = z
  .object({
    full_name: z
      .string()
      .trim()
      .min(3, "Name should be at least 3 characters")
      .max(30, "Name is too long"),
    email: z.string().trim().email("Invalid mail address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password doesn't match",
    path: ["confirm_password"],
  });

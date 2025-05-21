import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("This field must be email"),
  password: z.string().min(6, "Password must be above 6 characters"),
});

//Signup validation
export const SignupSchema = z.object({
  fullname: z.string().min(2, "Full name must be above 6 characters"),
  email: z.string().email("This field must be email"),
  password: z.string().min(6, "Password must be above 6 characters"),
  image: z
    .any()
    .refine((file) => file.length > 0, "No photo provided!")
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          file?.[0]?.type
        ),
      "Just photo accept!"
    ),
});

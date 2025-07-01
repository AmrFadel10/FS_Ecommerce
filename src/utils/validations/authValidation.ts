import { z } from "zod";

//Login validation

export const loginValidation = z.object({
  email: z
    .string({
      required_error: "This field is required!",
      invalid_type_error: "This field must be string!",
    })
    .email({ message: "This field must contain a valid email address!" }),
  password: z
    .string({
      required_error: "This field is required!",
      invalid_type_error: "This field must be string!",
    })
    .min(6, { message: "This field must contain at least 6 characters!" }),
});

//Signup validation

export const SignupValidation = z
  .object({
    image: z
      .instanceof(File, { message: "Please upload a valid image file!" })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Image must be less than 2MB!",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
            file.type
          ),
        { message: "Only images are allowed!" }
      ),
    firstName: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .min(2, { message: "This field must contain at least 2 characters!" }),
    lastName: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .min(2, { message: "This field must contain at least 2 characters!" }),
    email: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .email({ message: "This field must contain a valid email address!" }),
    password: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .min(6, { message: "This field must contain at least 6 characters!" }),
    confirmPassword: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .min(6, { message: "This field must contain at least 6 characters!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "This field should be identical to the password!",
    path: ["confirmPassword"],
  });

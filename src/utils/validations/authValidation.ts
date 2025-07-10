import { z } from "zod";

//Login validation

export const loginValidation = z.object({
  email: z
    .string({
      required_error: "This field is required!",
      invalid_type_error: "This field must be string!",
    })
    .trim()
    .email({ message: "This field must contain a valid email address!" }),
  password: z
    .string({
      required_error: "This field is required!",
      invalid_type_error: "This field must be string!",
    })
    .min(6, { message: "This field must contain at least 6 characters!" })
    .trim(),
});

//Signup validation

export const SignupValidation = z
  .object({
    // image: z
    //   .instanceof(File, { message: "Please upload a valid image file!" })
    //   .refine((file) => file.size <= 2 * 1024 * 1024, {
    //     message: "Image must be less than 2MB!",
    //   })
    //   .refine(
    //     (file) =>
    //       ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
    //         file.type
    //       ),
    //     { message: "Only images are allowed!" }
    //   ),
    fullName: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .trim()
      .min(2, { message: "This field must contain at least 2 characters!" }),
    mobile: z
      .string({
        invalid_type_error: "This field must be string!",
      })
      .trim()
      .regex(/^(\+?\d{1,3})?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,5}[-.\s]?\d{4}$/, {
        message: "Mobile number is not valid",
      }),
    email: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .trim()
      .email({ message: "This field must contain a valid email address!" }),
    password: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .trim()
      .min(6, { message: "This field must contain at least 6 characters!" }),
    confirmPassword: z
      .string({
        required_error: "This field is required!",
        invalid_type_error: "This field must be string!",
      })
      .trim()
      .min(6, { message: "This field must contain at least 6 characters!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "This field should be identical to the password!",
    path: ["confirmPassword"],
  });

//Update account info validation

export const updateAccountInfoValidation = z
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
      )
      .optional(),
    fullName: z
      .string({
        invalid_type_error: "This field must be string!",
      })
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => val === undefined || val.trim().length >= 2, {
        message: "This field must contain at least 2 characters!",
      }),
    mobile: z
      .string({
        invalid_type_error: "This field must be string!",
      })
      .trim()
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine(
        (val) =>
          val === undefined ||
          /^(\+?\d{1,3})?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,5}[-.\s]?\d{4}$/.test(
            val
          ),
        { message: "Mobile number is not valid" }
      ),

    password: z
      .string({
        invalid_type_error: "This field must be string!",
      })
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => val === undefined || val.trim().length >= 6, {
        message: "This field must contain at least 6 characters!",
      }),
    confirmPassword: z
      .string({
        invalid_type_error: "This field must be string!",
      })
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => val === undefined || val.trim().length >= 6, {
        message: "This field must contain at least 6 characters!",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "This field should be identical to the password!",
    path: ["confirmPassword"],
  });

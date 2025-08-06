import { z } from "zod";

export const addressValidation = z.object({
  state: z
    .string({ required_error: "This field is required" })
    .min(2, { message: "This field must be at least 2 characters" }),
  city: z
    .string({ required_error: "This field is required" })
    .min(2, { message: "This field must be at least 2 characters" }),
  zipCode: z.coerce
    .number({ required_error: "This field is required" })
    .min(2, { message: "This field must be at least 2 characters" }),
  country: z
    .string({ required_error: "This field is required" })
    .min(2, { message: "This field must be at least 2 characters" }),
  addressLine: z
    .string({ required_error: "This field is required" })
    .min(2, { message: "This field must be at least 2 characters" }),
});

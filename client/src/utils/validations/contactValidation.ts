import { z } from "zod";

export const ContactValidation = z.object({
  name: z.string().trim().min(1, "Name is required!"),
  email: z.string().trim().email("Must be email!").min(1, "Email is required!"),
  mobile: z.string().trim().min(1, "Mobile is required!"),
  comment: z
    .string()
    .trim()
    .min(20, "Comment must be contains above 20 characters!")
    .nonempty("Comment is required!"),
});

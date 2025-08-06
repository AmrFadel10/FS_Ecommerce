import { z } from "zod";

const couponValidation = z.object({
  name: z.string({ required_error: "coupon is required" }).trim(),
});

export default couponValidation;

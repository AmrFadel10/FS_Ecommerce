const { default: mongoose } = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    country: {
      type: String,
      required: [true, "Please enter your country"],
    },
    state: {
      type: String,
      required: [true, "Please enter your state"],
    },
    city: {
      type: String,
      required: [true, "Please enter your city"],
    },
    addressLine: {
      type: String,
      required: [true, "Please enter your addressStreet"],
    },

    zipCode: {
      type: Number,
      required: [true, "Please enter your zipCode"],
    },
  },
  { timestamps: true }
);

const Address =
  mongoose?.models?.Address || mongoose.model("Address", addressSchema);

module.exports = { Address };

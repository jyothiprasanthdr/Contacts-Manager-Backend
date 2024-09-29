const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please Add the Contact name"] },
    email: { type: String, required: [true, "Please Add the Email address"] },
    phone: { type: String, required: [true, "Please Add the contact number"] },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);

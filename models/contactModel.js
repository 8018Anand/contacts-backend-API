const mongoose = require("mongoose");

const contactSchma = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      requird: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email"],
    },
    phone: {
      type: String,
      required: [true, "please add the contact phone"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchma);

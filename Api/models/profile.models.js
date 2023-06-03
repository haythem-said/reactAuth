const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfile = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    tel: String,
    city: String,
    country: String,
    postalcode: String,
    bio: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("profiles", UserProfile);

var mongoose = require("mongoose");

const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};

const userSchema = new mongoose.Schema(
   {
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);
const User = mongoose.model("User", userSchema);

module.exports = {
    USER_TYPES,
    User
}
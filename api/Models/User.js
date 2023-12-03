const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  jId: {
    type: String,
    required: true,
  },
  pseudo: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

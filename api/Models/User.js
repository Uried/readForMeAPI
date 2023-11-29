const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  idUser:{
    type: String,
    required: true
  },
  pseudo: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
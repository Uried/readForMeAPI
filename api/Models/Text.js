const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: false,
    require: true,
  },
});

const Text = mongoose.model('Text', TextSchema);
module.exports = Text;
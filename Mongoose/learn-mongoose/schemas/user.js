const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  address: {
    type: String,
    required: true,
    unique: true,
  },
  TokenId: {
    type: String,
    required: true,
    unique: true,
  },
  Property: {
    type: Object,
    required: true,
  },
  Icx: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);

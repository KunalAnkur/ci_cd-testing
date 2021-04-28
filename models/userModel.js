const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    
  }
);

module.exports = User = mongoose.model("User", userSchema);
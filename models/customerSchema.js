const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the article)
const userSchema = new Schema(
  {
    FirstName: String,
    LastName: String,
    Email: String,
    Telephone: Number,
    Age: Number,
    Country: String,
    Gender: String,
  },
  { timestamps: true }
);

// Create a model based on that schema
const User = mongoose.model("customer", userSchema);

// export the model
module.exports = User;

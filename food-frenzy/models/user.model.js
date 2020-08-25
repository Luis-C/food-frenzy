const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },

  bumpable: { type: Boolean, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  contact: { type: String, required: false },

  bump_limit: { type: Number, required: false },
  bump_period: { type: String, required: false },
  buyable: { type: Boolean, required: true },
  buy_limit: { type: Number, required: false },
  buy_period: { type: String, required: false },
  allergies: [{ type: String, required: false }],

  // NOTE: For scalability purposes these shoul be their own collections
  // However to keep things simple they're not.
  friends: [{ type: String, required: false }],
  requests: { type: String, required: false },
  history: { type: JSON, required: false },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", schema);

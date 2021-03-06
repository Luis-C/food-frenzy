const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },

  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  contact: { type: String, required: false },

  bumpable: { type: Boolean, required: true, default: false },
  bump_limit: { type: Number, required: false, default: 0 },
  bump_period: { type: String, required: false, default: "Day" },
  buyable: { type: Boolean, required: true, default: false },
  buy_limit: { type: Number, required: false, default: 0 },
  buy_period: { type: String, required: false, default: "Day" },
  allergies: [
    {
      name: String,
      severity: String,
    },
  ],

  // NOTE: For scalability purposes these shoul be their own collections
  // However to keep things simple they're not.
  friends: [{ type: String, required: false }],
  requests: { type: String, required: false },
  history: { type: JSON, required: false },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", schema);

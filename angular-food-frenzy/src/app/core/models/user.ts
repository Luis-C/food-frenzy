export class User {
  username: string;
  // we don't want the hash on the front end for security reasons.
  bumpable: boolean;
  buyable: boolean;

  address: string;
  city: string;
  state: string;
  zipcode: string;

  // Optional parameters have ? in Typescript and go at the end of the object
  // definition
  contact?: string;
  allergies?: string;
  bump_limit?: number;
  bump_period?: string;
  buy_period?: string;

  firstName?: string;
  lastName?: string;

  friends?: string[];
  requests?: string[];
  history?: JSON;

  token?: string;
}

// const schema = new Schema({
//   username: { type: String, unique: true, required: true },
//   hash: { type: String, required: true },
//   firstName: { type: String, required: false },
//   lastName: { type: String, required: false },

//   bumpable: { type: Boolean, required: true },
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zipcode: { type: String, required: true },
//   contact: { type: String, required: false },
//   allergies: [{ type: String, required: false }],
//   bump_limit: { type: Number, required: false },
//   bump_period: { type: String, required: false },
//   buyable: { type: Boolean, required: true },
//   buy_limit: { type: Number, required: false },
//   buy_period: { type: String, required: false },

//   friends: [{ type: String, required: false }],
//   requests: { type: String, required: false },
//   history: { type: JSON, required: false },
// });

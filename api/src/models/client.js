const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: String,
  address: [
    {
      street: String,
      number: Number,
      postalCode: Number,
      state: String,
      country: String,
    },
  ],
  phone: [{ name: String, phoneNumber: Number }],
  email: [{ name: String, email: String }],
  message: [{ type: Schema.Types.ObjectId, ref: "message" }],
  isDelete: Boolean,
});

clientSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    (returnedObject.id = returnedObject._id), delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Client = model("client", clientSchema);

module.exports = Client;
const Client = require("../models/client.js");
const clientRouter = require("express").Router();

clientRouter.get("/", (req, res) => {
  Client.find({})
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

clientRouter.post("/", async (request, response) => {
  const { body } = request;
  const {
    name,
    street,
    number,
    postalCode,
    state,
    country,
    namePhone,
    phoneNumber,
    nameEmail,
    email,
    isDelete = false,
  } = body;

  const newClient = new Client({
    name,
    address: [
      {
        street,
        number,
        postalCode,
        state,
        country,
      },
    ],
    phone: [{ name: namePhone, phoneNumber }],
    email: [{ name: nameEmail, email }],
    isDelete,
  });

  newClient
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  response.send("cleinte creado satisfactoriamente");
});

module.exports = clientRouter;

// {
//   "name":"Pascual",
//   "street":"Arieta",
//   "number":"234",
//   "postalCode":"1754",
//   "state":"Argentina",
//   "country":"Argentina",
//   "namePhone":"Pascual",
//   "phoneNumber":"12345678",
//   "nameEmail":"Pascual",
//   "email":"pascual@Pascual"
 
// } 
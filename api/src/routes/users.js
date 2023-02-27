const User = require("../models/user.js");
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");

userRouter.get("/", (req, res) => {
  User.find({ isDelete: false })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

userRouter.post("/", async (request, response) => {
  const { body } = request;
  const { perfil, name, surname, password, admin, isDelete = false } = body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    perfil,
    name,
    surname,
    passwordHash: passwordHash,
    admin,
    isDelete,
  });

  newUser
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  response.send("Usuario creado satisfactoriamente");
});

module.exports = userRouter;

const jwt = require('jsonwebtoken');
const User = require("../models/user.js");
const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const {
    JWTTOKEN
  } = process.env; 


loginRouter.get("/", async (request, response) => {
    const {body} = request
    const {username, password} = body

    const user = await User.findOne({username})

    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!passwordCorrect) {
        return res.status(401).json({ error: "invalid user or password" })
    }

    const useForToken = {
        id: user._id,
        username: user.username,
    }

    const token = jwt.sign(useForToken, JWTTOKEN)

    response.send({
        name: user.name,
        username: user.username,
        token
  })
})

module.exports = loginRouter; 
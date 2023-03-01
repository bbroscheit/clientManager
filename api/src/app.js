const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/users.js");
const messageRouter = require("./routes/messages.js");
const clientRouter = require("./routes/clients.js");

const server = express();

server.name = "API";
server.use(cors());


server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `*`);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use('/api/users', userRouter);
server.use('/api/messages', messageRouter);
server.use('/api/clients', clientRouter);  
server.use(express.json())


module.exports = server
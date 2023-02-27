//require('dotenv').config();
const mongoose = require("mongoose");

const connectionString = 'mongodb+srv://cerberos1987:nf85TYTxBazvJ3oN@cluster0.m38iplk.mongodb.net/callManager?retryWrites=true&w=majority'

mongoose.set("strictQuery", false);

mongoose.connect(connectionString)
    .then(() => {
        console.log("sucessfully connect with database")
    })
    .catch(err => {
        console.log(err)
    })

const { Schema , model, models} = require("mongoose");

const userSchema = new Schema({
    perfil: String,
    name: String,
    surname: String,
    passwordHash: String,
    admin: Boolean,
    isDelete:Boolean
})

userSchema.set("toJSON" , {
    transform:(document, returnedObject) => {
        returnedObject.id = returnedObject._id,
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = model("user", userSchema);

module.exports = User;
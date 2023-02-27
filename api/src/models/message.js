const { Schema, model} = require("mongoose");

const messageSchema = new Schema ({
    comment: String,
    date: Date,
    proxCall: Date,
    client:[{
        type:Schema.Types.ObjectId,
        ref:"client"
    }],
    isDelete:Boolean
})

messageSchema.set("toJSON" , {
    transform:(document, returnedObject) => {
        returnedObject.id = returnedObject._id,
        delete returnedObject._id
        delete returnedObject.__v
    }
})



const Message = model("message", messageSchema);

module.exports = Message;
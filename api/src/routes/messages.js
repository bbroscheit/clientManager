const Client = require("../models/client.js");
const Message = require("../models/message.js");
const messageRouter = require("express").Router();


messageRouter.get("/" , (request , res) => {
    const params = request.params
    const { id } = params
        Message.find({})
    // Client.find({client : id}). populate("message")
        .then(result => res.json(result))
        .catch(err => console.log(err))

    
})

messageRouter.post("/" , async (request, response) => {
    const {body} = request;
    const {comment, date, proxCall, clientId, isDelete} = body

    const client = await Client.findById(clientId)
    
    const newMessage = new Message({
        comment,
        date,
        proxCall,
        client: client._id,
        isDelete
    })

    try {
        const savedMessage = await newMessage.save();
        console.log(client)
        client.message = client.message.concat(savedMessage._id)
        await client.save()
        response.json(savedMessage)
    } catch (error) {
        console.log(error)
    }
})




module.exports = messageRouter;

// {"comment":"algun comentario", 
// "date": "12-12-12", 
// "proxCall":"12-13-12", 
// "clientId" : "63e8477d4a53f7322d428a14"
// }
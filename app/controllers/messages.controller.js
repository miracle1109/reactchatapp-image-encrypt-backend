const db = require("../models");
const Message = db.messages;

//new message
exports.createMessage = async (req, res) => {
    const newMessage = new Message(req.body);
    try {
        const savedNewMessage = await newMessage.save();
        res.status(200).json(savedNewMessage);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

//get messages
exports.getMessage = async (req, res) => {
    try {
        const messages = await Message.find({
            friendId: req.params.friendId,
        });
        res.status(200).json(messages);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
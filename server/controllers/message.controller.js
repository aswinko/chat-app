import Conversation from "../models/conversion.model.js";
import Message from "../models/message.model.js";
import { getReceiverSoceketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save()
    // await newMessage.save()

    //this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    
    //Socket.io functionality
    const receiverSocketId = getReceiverSoceketId(receiverId)
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }


    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in send message controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};




export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //REFERENCE but actual messages

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(conversation?.messages);
  } catch (error) {
    console.log("Error in get message controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

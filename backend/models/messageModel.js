import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // In this code snippet, the senderId property is defined within a Mongoose schema. It specifies that senderId is expected to be of type ObjectId, which is a type provided by Mongoose for representing MongoDB document IDs. The ref property indicates that senderId refers to documents in the "User" collection. 
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    // createdAt, updatedAt
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;

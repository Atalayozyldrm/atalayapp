import mongoose from "mongoose";

const reply = new mongoose.Schema({
  authorId: { type: String, required: true },
  entryId: { type: String, required: true },
  replyId: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now(),
  },
  image: { type: String },
  like: { tpye: Number },
  name: { type: String, required: true },
  content: { type: String, required: true },
  token: { type: String, required: true },
});

const Reply = mongoose.model("Reply", reply);
export default Reply;

import mongoose from "mongoose";

const entry = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  popular: {
    type: String,
    value: 1,
  },
  entry: {
    type: String,
    required: true,
    min: [2, "En az 3 karakter "],
  },
  like: {
    type: Number,
  },
  id: { type: String },
  author: {
    type: String,
    required: true,
  },
  authorId: { type: String, required: true },
  token: { type: String },
});

const Entry = mongoose.model("Entry", entry);

export default Entry;

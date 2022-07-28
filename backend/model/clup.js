import mongoose from "mongoose";

const clup = new mongoose.Schema({
  token: { type: String, required: true },
  clup: [],
  entry: [],
  online: [],
});

const Clup = mongoose.model("Clup", clup);
export default Clup;

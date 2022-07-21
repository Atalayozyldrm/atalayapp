import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: String,
  token: { type: String, required: true },
  clup: [],
  frindes: [],
  admin: false,
  role: false,
});

const User = mongoose.model("User", user);
export default User;

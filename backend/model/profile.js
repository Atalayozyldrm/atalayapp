import mongoose from "mongoose";

const profile = new mongoose.Schema({
  token: { type: String, required: true },
  authorId: { type: String, required: true },
  image: { type: String },
  content: String,
  ref: "User",
  token: { type: String, required: true },
});

const Profile = mongoose.model("Profile", profile);
export default Profile;
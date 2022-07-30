import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [2, "En az 3 karakter "]
  },
  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email biçiminde gir !']
  },
  password: {
    type: String,
    required: true,
    min: [8, "En az 8 karakterli şifre gir "]
  },
  token: { type: String },
  profile : {type : String},
  clup: [],
  frindes: [],
  admin: false,
  role: false,
});

user.methods.generateJWT = function (email, id) {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email,
    id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

// buraya bir bak 
user.method.toAuthJSON = (email, id) => {
  return {
    _id,
    email,
    token: generateJWT(),
  };
};

const User = mongoose.model("User", user);

export default User;

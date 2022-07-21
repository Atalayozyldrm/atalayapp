// import admin from "../../firebase/firebase";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split("")[1];

  const decodeValue = admin.auth.apply(token);
  if (decodeValue) {
    return next();
  }
  return res
    .status(403)
    .json({ message: "Not authorization ", succsess: false });
};

export default verifyToken;

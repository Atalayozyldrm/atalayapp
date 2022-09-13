import jwt from "jsonwebtoken";

const acsess = (req, res, next) => {
  const token = req.get("Authorization");

  console.log(token);
  if (!token) {
    return res.status(403).json({
      message: "Giriş yap 😊!",
    });
  }
  jwt.verify(token, "secret", (err, decode) => {
    if (err) return res.status(403).json({ meesage: "Geçersiz Token !" });
    console.log(decode);
    next();
  });
};

export default acsess;

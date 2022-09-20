const acsess = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) {
    return res.status(403).json({
      message: "Giriş yap 😊!",
    });
  }
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
};

export default acsess;

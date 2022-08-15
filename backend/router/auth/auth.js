import express from "express";
import passport from "passport";
import auth from "../../middleware/auth/auth.js"
import User from "../../model/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const router = express.Router();

const authOP = auth.optional

router.get("/login", (req, res, next) => {
  res.send("nah 😊")
});

router.post("/register", async (req, res, next) => {
  const { body: { user } } = req
  if (!user) res.status(400).json("email required !")
  if (!user.password) res.status(400).json("password required !")

  const oldUser = await User.findOne({ email: user.email })
  console.log(oldUser)
  const registerUser = new User(user);

  if (oldUser) {
    return res.status(400).json({ message: "Bu kullanıcı kayıtlı !" })
  }
  const salt = await bcrypt.genSalt(10);
  registerUser.password = await bcrypt.hash(registerUser.password, salt);

  return registerUser.save().then(() => res.json({ user: registerUser }))
})

router.post("/login", authOP, (req, res, next) => {
  const { body: { user } } = req

  const userLogin = new User();
  if (!user.email && !user.password) {
    return res.status(402).json({
      errors: "Eposta veya şifre zorunlu 😊 ! ",
    });
  }
  return passport.authenticate('local', {
    session: false,
    successRedirect: '/home',
    failureRedirect: '/login'
  }, (err, passportUser, info) => {
    if (err) {
      return next(err)
    }
    if (passportUser) {
      console.log(passportUser)
      const user = passportUser
      user.token = userLogin.generateJWT(user.email, user.id);
      return res.json({ user: passportUser })
    }
    return res.status(400).json({ message: info });

  })(req, res, next)
})
router.get("/verify/:user", auth.optional, async (req, res, next) => {
  const a = req.params.user
  const token = req.get("Authorization")
  const data = await User.findOne({ a })
  const xyz = jwt.verify(token,"secret")
  if (xyz) {
   return res.status(200).json({ user: data })
  }
  return res.status(400).json({message : "Geçersiz oturum !"})
})
router.post("/logut", (req, res, next) => {
  req.logout((err) => {
    if (err) next(err)
    res.redirect("/")
  })
})

export default router;

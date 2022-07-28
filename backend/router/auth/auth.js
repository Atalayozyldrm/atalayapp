import express from "express";
import passport from "passport";
import auth from "../../middleware/auth/auth.js"
import User from "../../model/user.js"
import bcrypt from "bcrypt"
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
  // return console.log(user)
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

router.post("/logut", (req, res, next) => {
  req.logout((err) => {
    if (err) next(err)
    res.redirect("/")
  })
})
export default router;

import express from "express";
import passport from "passport";
import address from "address";
import auth from "../../middleware/auth/auth.js";
import User from "../../model/user.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import Profile from "../../model/profile.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

const authOP = auth.optional;
const client = "https://atalay.netlify.app/login";
const clienthome =
  "https://atalayapp.herokuapp.com/api/auth/login/google/redirect/succsess";

const clientFacebook =
  "https://atalayapp.herokuapp.com/api/auth/login/facebook/redirect/succsess";

router.get("/login", (req, res, next) => {
  res.send("nah 😊");
});

router.post(
  "/register",
  asyncHandler(async (req, res, next) => {
    const {
      body: { user },
    } = req;
    if (!user) res.status(400).json("email required !");
    if (!user.password) res.status(400).json("password required !");

    const oldUser = await User.findOne({ email: user.email });
    const registerUser = new User(user);

    if (oldUser) {
      return res.status(400).json({ message: "Bu kullanıcı kayıtlı !" });
    }
    const salt = await bcrypt.genSalt(10);
    const id = uuidv4();
    const ip = address.ip();
    registerUser.ipAdress = ip;
    registerUser.password = await bcrypt.hash(registerUser.password, salt);
    registerUser.token = registerUser.generateJWT(user.email, id);
    const profileAuthor = await Profile.create({
      name: user.name,
      authorId: registerUser._id,
      token: registerUser.token,
    });
    return registerUser.save().then(() => res.json({ user: registerUser }));
  })
);

router.get(
  "/login/facebook",
  passport.authenticate(
    "facebook",
    {
      scope: ["profile", "email"],
    },
    {
      failureRedirect: client,
      successRedirect: clientFacebook,
      failureMessage: true,
    }
  )
);
router.get(
  "/login/facebook/redirect/succsess",
  asyncHandler((req, res, next) => {
    const id = req.user.id;
    res.cookie("acsess_token", req.user.token, {
      encode: String,
      httpOnly: true,
      domain: "https://atalay.netlify.app",
    });

    res.cookie("id", id, {
      encode: String,
      httpOnly: true,
      domain: "https://atalay.netlify.app",
    });
    res.redirect(client);
  })
);
router.get(
  "/login/facebook/callback",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    successRedirect: clientFacebook,
    failureRedirect: client,
  })
);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/login/google/callback",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    successRedirect: clienthome,
    failureRedirect: client,
  })
);
router.get(
  "/login/google/redirect/succsess",
  asyncHandler((req, res, next) => {
    const id = req.user.id;
    res.cookie("acsess_token", req.user.token);
    res.cookie("id", id, {
      encode: String,
      httpOnly: true,
      domain: "https://atalay.netlify.app",
    });
    res.redirect(client);
  })
);
router.get("/login/google/logout", (req, res, next) => {
  req.logout((err) => console.log(err));
});

router.post(
  "/login",
  authOP,
  asyncHandler((req, res, next) => {
    const {
      body: { user },
    } = req;

    const userLogin = new User();
    if (!user.email && !user.password) {
      return res.status(402).json({
        errors: "Eposta veya şifre zorunlu 😊 ! ",
      });
    }
    return passport.authenticate(
      "local",
      {
        session: false,
        successRedirect: clienthome,
        failureRedirect: client,
      },
      (err, passportUser, info) => {
        if (err) {
          return next(err);
        }
        req.login(passportUser, (err) => {
          if (err) return next(err);
          console.log("Request Login Succsess (passport-local)");

          if (passportUser) {
            console.log(passportUser);
            const user = passportUser;
            user.token = userLogin.generateJWT(user.email, user.id);
            user.isOnline = true;
            return res.json({ user: passportUser });
          }
          return res.status(400).json({ message: info });
        });
      }
    )(req, res, next);
  })
);
router.get(
  "/verify/:id",
  auth.optional,
  asyncHandler(async (req, res, next) => {
    const a = req.params.id.toString();
    const token = req.get("Authorization");
    if (!token) return res.status(403).json({ message: "Giriş yap !" });
    const data = await User.findOne({ _id: a }).select("-password");
    if (a) {
      return res.status(200).json({ user: data });
    }
    return res.status(400).json({ message: "Geçersiz oturum !" });
  })
);
router.get(
  "/logout",
  asyncHandler((req, res, next) => {
    req.logout((err) => {
      if (err) next(err);
    });
    res.json({ message: "Succsess Logout" });
  })
);

export default router;

import express from "express";
import csrf from "./csrf/csrf.js";
import clup from "./clup/clup.js";
import auth from "./auth/auth.js";
import user from "./user/user.js";
import entry from "./entry/entry.js";
import verify from "./Chaptca/verify.js";
import accsess from "./../middleware/auth/accsessRouter.js";

const router = express.Router();

router.use("/csrf", csrf);
router.use("/clup", accsess, clup);
router.use("/user", user);
router.use("/auth", accsess, auth);
router.use("/entry", accsess, entry);
router.use("/verify", verify);
export default router;

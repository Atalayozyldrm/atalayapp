import express from "express";
import csrf from "./csrf/csrf.js";
import clup from "./clup/clup.js";
import verifyToken from "../middleware/auth/authController.js";
import auth from "./auth/auth.js";
import passport from "passport";
const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());
router.use("/csrf", csrf);
router.use("/clup", verifyToken, clup);
router.use("/auth", auth);
export default router;

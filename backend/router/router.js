import express from "express";
import csrf from "./csrf/csrf.js";
import clup from "./clup/clup.js";
import auth from "./auth/auth.js";
import entry from "./entry/entry.js"
import accsess from "./../middleware/auth/accsessRouter.js"
const router = express.Router();


router.use("/csrf", csrf);
router.use("/clup", accsess, clup);
router.use("/auth", auth);
router.use("/entry", entry)
export default router;

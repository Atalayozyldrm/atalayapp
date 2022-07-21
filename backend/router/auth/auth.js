import express from "express";
import passport from "passport";
import crypto from "crypto";
import { LocalStrategy } from "passport-local";
const router = express.Router();

router.get("/login", (req, res, next) => {
  console.log(req.header);
});

export default router;

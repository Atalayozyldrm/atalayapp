import express from "express";
import asyncHandler from "express-async-handler";
import { verify } from "hcaptcha";

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const token = req.get("H-Chaptca");
    const secret = "0x2cd4290491f23e97Ba3579E88aB8dD6CBf8Dc9F2";
    verify(secret, token)
      .then((data) => {
        if (data.success === true) {
          res.status(200).json({ message: true });
          next();
        }
        res.status(400).json({ message: data });
      })
      .catch((err) => console.log(err));
  })
);
export default router;

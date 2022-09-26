import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get(
  "/",
  asyncHandler((req, res, next) => {
    const token = req.csrfToken();
    res.send({ csrf: token });
    res.headersSent[("X-Csrf-Token", true)];
  })
);
export default router;

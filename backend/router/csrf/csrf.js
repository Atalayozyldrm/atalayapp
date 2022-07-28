import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  const token = req.csrfToken();
  res.send({ csrf: token });
  res.headersSent[("X-Csrf-Token", true)];
});
export default router;

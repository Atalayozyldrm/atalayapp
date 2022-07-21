import express from "express";

const router = express.Router();

router.get("/add/:id", (req, res, next) => {
  res.send("oluşturuldu " + req.params.id);
  console.log(req.header);
});

export default router;

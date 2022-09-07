import express from "express";
import Entry from "../../model/entry.js";
import { v4 as uuidv4 } from "uuid";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get(
  "/entry",
  asyncHandler(async (req, res, next) => {
    const popi = await Entry.find({}).limit(5).sort({ $natural: -1 });
    return res.status(200).json({ data: popi });
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const getEntry = await Entry.find({ _id: id });

    return res.status(200).json({ entry: getEntry });
  })
);
router.post(
  "/add",
  asyncHandler(async (req, res, next) => {
    const {
      body: { entry },
    } = req;
    const post = new Entry(entry);
    const uid = uuidv4();

    if (!entry.title || !entry.entry)
      return res
        .status(400)
        .json({ message: "Hata Boş içerik gönderilemez !" });

    console.log(entry);
    post.id = uid;

    post.save().then((data) => res.status(200).json({ entry: { data } }));
  })
);
router.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const post = Entry.findOne({ id: id });

    const postDelte = await Entry.updateMany({}, { $unset: { id: id } })
      .then((data) => {
        return res.status(200).json({ message: "Succsess Deleted" });
      })
      .catch((err) => console.log(err));
  })
);

export default router;

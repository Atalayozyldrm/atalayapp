import express from "express";
import Entry from "../../model/entry.js";
import Reply from "../../model//reply.js";
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
  "/reply",
  asyncHandler(async (req, res, next) => {
    const {
      body: { replyUser },
    } = req;

    console.log(replyUser);

    const reply = new Reply();
    reply.authorId = replyUser.authorId;
    reply.entryId = replyUser.entryId;
    reply.replyId = replyUser.replyId;
    reply.name = replyUser.name;
    reply.content = replyUser.content;
    reply.token = replyUser.token;

    reply
      .save()
      .then((ok) => res.status(200).json({ message: reply }))
      .catch((err) => res.status(400).json({ message: err.message }));
  })
);

router.get(
  "/entry/reply/:id",
  asyncHandler(async (req, res, next) => {
    const entry = req.params.id;
    const data = await Reply.find({ entryId: entry }).select("-token");
    return res.status(200).json({ message: data });
  })
);

router.post(
  "/like/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;

    const entry = await Entry.find({ _id: id });
    const process = entry.like + 1;
    entry.like = process;
    res.json(entry);
    // res.status(400).json({ message: "Bad request , type not a number !" });
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
    post.like = 0;

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

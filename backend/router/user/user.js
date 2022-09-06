import express from "express";
import Profile from "../../model/profile.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

router.get(
  "/profile/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const data = await Profile.find({ authorId: id }).select("-token");

    return res.status(200).json({ profile: data });
  })
);
router.post(
  "/content/edit",
  asyncHandler(async (req, res, next) => {
    const {
      body: { user },
    } = req;

    const id = user.id;
    const profile = new Profile();
    const oldProfile = await Profile.findOne({ authorId: id });

    if (!oldProfile) {
      profile.authorId = user.id;
      profile.content = user.content;
      profile.token = user.token;

      profile.save((succsess) => {
        return res.status(200).json({ message: succsess });
      });
    }
    const data = await Profile.findOneAndUpdate(
      { authorId: id },
      { $set: { content: user.content } },
      { new: true },
      (a) => {
        return res.status(200).json({ message: "Ok" });
      }
    ).clone();
  })
);

export default router;

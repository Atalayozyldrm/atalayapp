import express from "express";
import Profile from "../../model/profile";
import jwt from "jsonwebtoken";
const router = express.Router();

router.putch("/content/edit/:id", (req, res, next) => {
  const {
    body: { user },
  } = req;
  const profile = new Profile(user);
  const id = req.params.id;
  if (user.token) {
    jwt
      .verify(user.token, "secret")
      .then((res) => {
        profile
          .save()
          .then((data) => {
            res.status(300).json({ profileData: data });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
});

export default router;

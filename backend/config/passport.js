import passport from "passport";
import LocalStrategy from "passport-local";
import data from "./googleApi.js";
import { v4 as uuidv4 } from "uuid";
import address from "address";
import GoogleStrategy from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import User from "../model/user.js";
import bcrypt from "bcryptjs";
import Profile from "../model/profile.js";

const uid = uuidv4();
const ip = address.ip();

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]",
    },
    (email, password, done) => {
      User.findOne({ email }, (err, user) => {
        if (!user)
          return done(null, false, { message: "Böyle bir hesap yok 😒" });
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "Yanlış şifre veya  eposta  ",
            });
          }
        });
      });
    }
  )
);
// Google login
passport.use(
  new GoogleStrategy(
    {
      clientID: data.web.client_id,
      clientSecret: data.web.client_secret,
      callbackURL: "http://localhost:5500/api/auth/login/google/callback",
    },
    async (accessToken, refreshToken, user, done) => {
      const userGoogle = await User.findOne({
        email: user.emails[0].value,
      });
      if (!userGoogle) {
        const userG = await User.create({
          name: user.displayName,
          email: user.emails[0].value,
          password: uid,
          ip: ip,
          profile_image: user.photos[0].value,
          token: accessToken,
          location: user._json.locale,
        });
        const Id = await User.find({ email: user.emails[0].value });
        await Profile.create({
          name: user.displayName,
          authorId: Id[0]._id,
          token: accessToken,
          content: "",
          email: user.emails[0].value,
        });
        return done(null, userG);
      }
      return done(null, userGoogle);
    }
  )
);

// facebook login
passport.use(
  new FacebookStrategy(
    {
      clientID: "1081876262446413",
      clientSecret: "0e18352d0e992d96ce0ff5b4bf37e5ec",
      callbackURL: "https://www.localhost.com:5500/oauth2/redirect/facebook",
    },
    (accessToken, refreshToken, profile, done) => {
      User.find({ facebook_id: profile.id }, (user, err) => {
        if (err) console.log(err);

        if (user) return done(null, user);

        console.log(profile);
      });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
export default passport;

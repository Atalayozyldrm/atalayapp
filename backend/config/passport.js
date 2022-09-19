import passport from "passport";
import LocalStrategy from "passport-local";
import FacebookStrategy from "passport-facebook";
import User from "../model/user.js";
import bcrypt from "bcryptjs";

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
// passport.use();

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

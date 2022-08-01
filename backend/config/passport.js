import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../model/user.js";
import bcrypt from "bcryptjs";

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (!user) return done(null, false, { message: "Böyle bir hesap yok 😒" })
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Yanlış şifre veya  eposta  ' });
      }
    });
  })
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
export default passport
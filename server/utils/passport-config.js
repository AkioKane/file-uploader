const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport) {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        console.log("log")
      } catch (err) {
        return done(err)
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {});
}

module.exports = initialize;
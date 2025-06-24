const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const pool = require("../db/pool");

function initialize(passport) {
  passport.use(
    new LocalStrategy(async (username, password, done) => {})
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {});
}

module.exports = initialize;
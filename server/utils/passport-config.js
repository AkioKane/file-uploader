const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { findUser, findUserById } = require('../prisma/quaries');

function initialize(passport) {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await findUser(username);
        console.log(user);

        if (!user) {
          return done(null, false, { message: "Incorrect username or password!" })
        }

        const hashedPassword = await bcrypt.compare(password, user[0].password)
        if (!hashedPassword) {
          return done(null, false, { message: "Incorrect username or password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err)
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user[0].id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await findUserById(id);

    done(null, user);
  });
}

module.exports = initialize;
const passport = require("passport");

async function signInRouterGet(req, res) {
  return res.json("sign-in");
}

async function signInRouterPost(req, res, next) {
  const data = null;

  return passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json("err not user!");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    })
  })
}

module.exports = {
  signInRouterGet,
  signInRouterPost
}
const passport = require("passport");

async function signInRouterGet(req, res) {
  return res.json("sign-in");
}

async function signInRouterPost(req, res, next) {
  return passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("err")
      return res.json("err not user!");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({
        success: true,
        redirectUrl: "/"
      });
    });
  })(req, res, next);
}

module.exports = {
  signInRouterGet,
  signInRouterPost
}
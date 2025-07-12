async function logOutRouterGet(req, res, next) {
  return req.logout((err) => {
    if (err) {
      next(err);
    }

    res.clearCookie('connect.sid');

    res.status(200).json({
      success: true,
      redirectUrl: "/"
    });
  });
}

module.exports = logOutRouterGet;
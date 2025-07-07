async function checkAuthRouterGet(req, res) {
  if (req.isAuthenticated()) {
    return res.json({ authenticated: true, user: req.user });
  } else {
    return res.json({ authenticated: false });
  }
}

module.exports = {
  checkAuthRouterGet
}
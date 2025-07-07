const bcrypt = require("bcrypt");
const { createUser, getData } = require("../prisma/quaries");

async function signUpRouterGet(req, res) {
  return res.json("sign-up");
}

async function signUpRouterPost(req, res) {
  const data = req.body;
  
  const password_hash = await bcrypt.hash(data.password, 10);

  await createUser(data.name, data.email, password_hash);
}

module.exports = {
  signUpRouterGet,
  signUpRouterPost
}
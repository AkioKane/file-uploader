const bcrypt = require("bcrypt");
const { createUser, findUser, findUserRegistration } = require("../prisma/quaries");

async function signUpRouterGet(req, res) {
  return res.json("sign-up");
}

async function signUpRouterPost(req, res) {
  const data = req.body;
  const password_hash = await bcrypt.hash(data.password, 10);

  if (await findUserRegistration(data.name, data.email)) {
    return res.json({
      success: false,
      message: "Username or email is taken!"
    });
  }

  await createUser(data.name, data.email, password_hash);
  
  return res.status(200).json({
    success: true,
    redirectUrl: "/"
  });
}

module.exports = {
  signUpRouterGet,
  signUpRouterPost
}
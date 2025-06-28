const { Router } = require("express");
const { signUpRouterGet } = require("../controllers/signUpController");

const signUpRouter = Router();

signUpRouter.get("/", signUpRouterGet)

module.exports = signUpRouter;
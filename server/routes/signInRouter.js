const { Router } = require("express");
const { signInRouterGet } = require("../controllers/signInController");

const signInRouter = Router();

signInRouter.get("/", signInRouterGet)

module.exports = signInRouter;
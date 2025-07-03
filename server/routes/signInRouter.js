const { Router } = require("express");
const { signInRouterGet, signInRouterPost } = require("../controllers/signInController");

const signInRouter = Router();

signInRouter.get("/", signInRouterGet)
signInRouter.post("/", signInRouterPost)

module.exports = signInRouter;
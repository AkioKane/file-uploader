const { Router } = require("express");
const { signUpRouterGet, signUpRouterPost } = require("../controllers/signUpController");

const signUpRouter = Router();

signUpRouter.get("/", signUpRouterGet);
signUpRouter.post("/", signUpRouterPost);

module.exports = signUpRouter;
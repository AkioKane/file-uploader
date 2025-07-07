const { Router } = require("express");
const { checkAuthRouterGet } = require("../controllers/checkAuthController");

const checkAuthRouter = Router();

checkAuthRouter.get("/", checkAuthRouterGet);

module.exports = checkAuthRouter;
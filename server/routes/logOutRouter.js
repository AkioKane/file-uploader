const { Router } = require("express");
const logOutRouterGet = require("../controllers/logOutController");

const logOutRouter = Router();

logOutRouter.get("/", logOutRouterGet);

module.exports = logOutRouter;
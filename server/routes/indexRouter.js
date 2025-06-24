const { Router } = require("express");
const { indexRouterGet } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexRouterGet);

module.exports = indexRouter;
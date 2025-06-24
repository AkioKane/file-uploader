const { Router } = require("express");
const { uploadsRouterGet } = require("../controllers/uploadsController");

const uploadsRouter = Router();

uploadsRouter.get("/", uploadsRouterGet)

module.exports = uploadsRouter;
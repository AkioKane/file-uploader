const { Router } = require("express");
const { uploadsRouterGet } = require("../controllers/uploadsController");

const uploadsRouter = Router();

uploadsRouter.get("/download/:filename", uploadsRouterGet)

module.exports = uploadsRouter;
const { Router } = require("express");
const { uploadsRouterPost } = require("../controllers/uploadsController");

const uploadsRouter = Router();

uploadsRouter.post("/download", uploadsRouterPost)

module.exports = uploadsRouter;
const { Router } = require("express");
const { addFilesPost } = require("../controllers/AddFilesController");

const addFilesRouter = Router();

addFilesRouter.get("/", addFilesPost);

module.exports = addFilesRouter;
const { Router } = require("express");
const { addFilesRouterPost } = require("../controllers/AddFilesController");
const { upload } = require("../utils/multer");

const addFilesRouter = Router();

addFilesRouter.post("/", upload.array("files"), addFilesRouterPost);

addFilesRouter.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(413).json({
      success: false,
      error: "File too large. Max size is 10MB"
    });
  }

  if (err.code === "LIMIT_UNEXPECTED_FILE") {
    return res.status(400).json({
      success: false,
      error: "Too many files or invalid field name"
    });
  }

  console.error("Upload error:", err);
  res.status(500).json({
    success: false,
    error: "File upload failed"
  });
});

module.exports = addFilesRouter;
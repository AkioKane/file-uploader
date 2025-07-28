const multer = require("multer");
const path = require("path");
const fs = require("fs");

if (!fs.existsSync('./utils/uploads')) {
  fs.mkdirSync('./utils/uploads');
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'utils', 'uploads'));
  },
  filename: (req, file, cb) => {
    const decodedName = decodeURIComponent(file.originalname)
    cb(null, Date.now() + "_" + decodedName);
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 5
  }
});

module.exports = {
  storage,
  upload
}
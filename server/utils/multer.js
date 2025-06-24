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
    cb(null, Date.now() + "_" + file.originalname);
  }
});

const upload = multer({ storage });

module.exports = {
  storage,
  upload
}
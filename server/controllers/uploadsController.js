const path = require('path');

async function uploadsRouterGet(req, res) {
  const fileName = req.params.filename;
  const filePatch = path.join(__dirname, "../utils/uploads", fileName);
  console.log(filePatch);

  
}

module.exports = {
  uploadsRouterGet
}
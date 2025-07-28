const { uploadFile, findUserById, findUserFiles } = require("../prisma/quaries");

async function addFilesRouterGet(req, res) {
  if (req.user) {
    const files = await findUserFiles(req.user[0].id)
    console.log(files);

    res.json({
      files: files
    })
  }
}

async function addFilesRouterPost(req, res) {
  // console.log(req.user);
  console.log(req.files);

  await uploadFile(req.user[0].id, req.files);

  console.log(await findUserById(req.user[0].id));
  console.log(await findUserFiles(req.user[0].id));

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ success: false, error: "Files don't loaded." });
  }

  res.json({
    success: true, 
    files: req.files.map(f => f.originalname)
  });
}

module.exports = {
  addFilesRouterGet,
  addFilesRouterPost
}
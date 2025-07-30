const fs = require('fs');
const path = require('path');

function encodeDownloadFilename (filename) {
  const safeFilename = filename.replace(/[<>:"\/\\|?*]/g, '_');
  const rfc5987Encoded = encodeURIComponent(safeFilename)
    .replace(/['()]/g, escape)
    .replace(/\*/g, '%2A');
  
  return `attachment; filename="${encodeURIComponent(safeFilename)}"; filename*=UTF-8''${rfc5987Encoded}`;
};

async function uploadsRouterPost(req, res) {
  try {
    const { filePath } = req.body;

    if (!filePath) {
      return res.status(400).json({
        success: false,
        message: "Incorrect path file"
      });
    }

    const normalizedPath = path.normalize(filePath);
    const uploadsDir = path.join(__dirname, "..", "utils", "uploads");

    if (!normalizedPath.startsWith(uploadsDir)) {
      return res.status(403).json({
        success: false,
        message: "Not enought rights!"
      })
    }

    if (!fs.existsSync(normalizedPath)) {
      return res.status(404).json({ error: 'Файл не найден' });
    }

    const ext = path.extname(normalizedPath).toLowerCase();

    const downloadFilename = `${path.basename(normalizedPath)}${ext}`;

    console.log(downloadFilename)

    const mimeTypes = {
      '.pdf': 'application/pdf',
      '.jpg': 'image/jpeg',
      '.png': 'image/png'
    };

    res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    res.setHeader(
      'Content-Disposition', 
      encodeDownloadFilename(path.basename(downloadFilename))
    );

    const fileStream = fs.createReadStream(normalizedPath);
    fileStream.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      success: false,
      message: "Server error"
    });
  }
}

module.exports = {
  uploadsRouterPost
}
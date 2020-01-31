const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb( null, `${process.env.PROFILE_PICTURE_PATH}`)
  },
  filename: function (req, file, cb) {
    cb( null, file.fieldname + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
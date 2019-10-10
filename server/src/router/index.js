const multer = require('multer');
const shortid = require('shortid');
const { getExtension } = require('../utils');


const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      cb(null, `${shortid.generate()}${getExtension(file.originalname)}`);
    },
  }),
});

async function webhookRouter(req, res) {
  try {
    return JSON.stringify(123);
  } catch (e) {
    throw e;
  }
}

async function imageUploadRouter(req, res) {
  try {
    return new Promise((resolve, reject) => {
      upload.single('file')(req, {}, (err) => {
        if (err) reject(err);

        const { file } = req;
        const filename = file.originalname;
        const extension = getExtension(filename);
        console.log('req.file', req.file);

        resolve('done');
      });
    });
  } catch (e) {
    console.log('err', e);
    throw e;
  }
}

module.exports = {
  webhookRouter, imageUploadRouter,
};

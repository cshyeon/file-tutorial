const multer = require('multer');
const multerS3 = require('multer-s3');
const shortid = require('shortid');
const AWS = require('aws-sdk');

const { S3_IMG_FOLDER } = require('../config/aws');

const { getExtension } = require('../utils');

const s3 = new AWS.S3();

const upload = multer({
  // storage: multer.diskStorage({
  //   destination(req, file, cb) {
  //     cb(null, 'uploads/');
  //   },
  //   filename(req, file, cb) {
  //     cb(null, `${shortid.generate()}${getExtension(file.originalname)}`);
  //   },
  // }),
  storage: multerS3({
    s3,
    bucket: 'img-test-upload',
    key(req, file, cb) {
      cb(null, `${S3_IMG_FOLDER}${shortid.generate()}${getExtension(file.originalname)}`);
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
      upload.single('file')(req, res, (err) => {
        if (err) reject(err);

        const { file } = req;
        console.log('req.file', req.file);

        resolve(req.file.location);
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

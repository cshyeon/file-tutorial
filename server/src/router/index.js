async function webhookRouter(req, res) {
  try {
    return JSON.stringify(123);
  } catch (e) {
    throw e;
  }
}

async function imageUploadRouter(req, res) {
  try {
    console.log(req.file);

    return JSON.stringify('ok img upload router');
  } catch (e) {
    throw e;
  }
}
module.exports = {
  webhookRouter, imageUploadRouter,
};

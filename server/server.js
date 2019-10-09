const { HttpServer } = require('./src');
const { webhookRouter, imageUploadRouter } = require('./src/router');

HttpServer.onRouter('/test', 'GET', webhookRouter);
HttpServer.onRouter('/image', 'POST', imageUploadRouter);
HttpServer.on();

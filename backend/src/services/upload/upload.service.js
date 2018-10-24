const blobService = require('feathers-blob');

const fs = require('fs-blob-store');
const hooks = require('./upload.hooks');

const blobStorage = fs(`${__dirname}/../../../uploads`);

module.exports = function (app) {
  app.use('/uploads', blobService({ Model: blobStorage }));
  const service = app.service('uploads');

  service.hooks(hooks);
};

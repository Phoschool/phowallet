// Initializes the `shops` service on path `/shops`
const createService = require('feathers-mongoose');
const createModel = require('../../models/shops.model');
const hooks = require('./shops.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/shops', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('shops');

  service.hooks(hooks);
};

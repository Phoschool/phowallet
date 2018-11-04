// Initializes the `payment` service on path `/payment`
const createService = require('./payment.class.js');
const hooks = require('./payment.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');

  const options = {
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/payment', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('payment');

  service.hooks(hooks);
};

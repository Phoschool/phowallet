const { authenticate } = require('@feathersjs/authentication').hooks;
const { createPayment } = require('./hook.functions');

module.exports = {
  before: {
    all: [
      // authenticate('jwt')
    ],
    find: [],
    get: [],
    create: [createPayment()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};

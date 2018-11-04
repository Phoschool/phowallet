// const { authenticate } = require('@feathersjs/authentication').hooks;
const { responseFullImage } = require('./hook.functions.js');

module.exports = {
  before: {
    all: [
      // authenticate('jwt')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [responseFullImage()],
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

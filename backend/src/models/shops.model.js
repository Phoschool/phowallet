// shops-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const shops = new Schema({
    text: {
      type: String,
      required: true
    },

  }, {
    timestamps: true
  });

  return mongooseClient.model('shops', shops);
};

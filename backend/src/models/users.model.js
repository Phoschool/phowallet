// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema(
    {
      email: {
        type: String,
        unique: true,
      },
      password: {
        type: String,
      },
      studentId: {
        type: String,
      },
      shopName: {
        type: String,
        default: '',
      },
      qrCode: {
        type: String,
      },
      imageURL: {
        type: String,
      },
      permission: {
        type: String,
        required: true,
        enum: ['student', 'merchant', 'admin'],
      },
      balance: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    },
  );

  return mongooseClient.model('users', users);
};

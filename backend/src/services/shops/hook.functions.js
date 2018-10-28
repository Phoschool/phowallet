const qrCode = require('qrcode');

module.exports.createQrcode = function () {
  return async function (hook) {
    console.log(hook.data);
    try {
      const fileName = Date.now();
      await qrCode.toFile(`./images/${fileName}.png`, hook.result._id, {
        color: {
          dark: '#000',
          light: '#FFF',
        },
        width: 400,
      });
      hook.data.qrCode = `http://localhost:3030/images/${fileName}.png`;
    } catch (e) {
      console.log(e);
      throw new Error('Cannot generate shop qrcode');
    }
  };
};

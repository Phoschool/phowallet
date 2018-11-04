const qrCode = require('qrcode');

module.exports.createQrCode = function () {
  return async function (hook) {
    if (hook.result.permission === 'merchant') {
      try {
        const fileName = Date.now();
        await qrCode.toFile(`./images/${fileName}.png`, `${hook.result._id}`, {
          color: {
            dark: '#000',
            light: '#FFF',
          },
          width: 500,
        });
        const data = await hook.app.service('users').patch(hook.result._id, {
          qrCode: `http://localhost:3030/images/${fileName}.png`,
        });
        hook.result.qrCode = data.qrCode;
      } catch (e) {
        console.log(e);
        throw new Error('cannot create your shop');
      }

      return hook;
    }
    return hook;
  };
};

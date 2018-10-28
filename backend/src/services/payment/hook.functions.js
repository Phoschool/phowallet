module.exports.createPayment = function () {
  return async function (hook) {
    const userInfo = await hook.app.service('users').get(hook.data.userId);
    if (userInfo.balance > hook.data.priceTotal) {
      try {
        await hook.app.service('users').patch(hook.data.userId, {
          $inc: {
            balance: -hook.data.priceTotal,
          },
        });
        await hook.app.service('users').patch(hook.data.shopId, {
          $inc: {
            balance: hook.data.priceTotal,
          },
        });
      } catch (e) {
        console.log(e);
        throw new Error('cannot create payment ');
      }
    } else {
      throw new Error('money not enough');
    }
    return hook;
  };
};

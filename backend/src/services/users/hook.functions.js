module.exports.createPermission = function () {
  return function (hook) {
    console.log(hook.data);
    return hook;
  };
};

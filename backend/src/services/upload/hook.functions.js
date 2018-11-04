module.exports.responseFullImage = () => (hook) => {
  hook.result.fullImage = `http://localhost:3030/images/${hook.result.id}`;
  hook.result.uri = '';
};

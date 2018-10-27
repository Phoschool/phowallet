const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const auth = require("@feathersjs/authentication-client");

const socket = io("http://localhost:3030/");
const app = feathers();

export default app
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }));

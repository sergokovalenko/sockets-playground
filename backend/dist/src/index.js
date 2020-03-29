"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const socketServer = require("socket.io");
const constants_1 = require("./../constants");
const App_1 = require("./App");
const server = http.createServer(App_1.default);
const io = socketServer(server);
App_1.default.listen(constants_1.defaultServerPort, constants_1.ipAddress, err => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${constants_1.ipAddress}:${constants_1.defaultServerPort}`);
});
io.on('connection', socket => {
    console.log('socket connection');
    socket.on('disconnect', () => {
        console.log('socket disconnected');
    });
    socket.on('send', msg => {
        io.emit('send', msg);
    });
    socket.on('type', msg => {
        io.emit('setType', msg);
    });
});
server.listen(constants_1.socketPort, constants_1.ipAddress, () => {
    console.log(`sokects are listening on ${constants_1.ipAddress}:${constants_1.socketPort}`);
});

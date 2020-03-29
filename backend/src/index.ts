import * as http from 'http';
import * as socketServer from 'socket.io';

import app from './App'

const ipAddress = '192.168.0.23';
const defaultServerPort = 3000;
const socketPort = 3001;

const server = http.createServer(app);
const io = socketServer(server);

app.listen(defaultServerPort, ipAddress, err => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${ipAddress}:${defaultServerPort}`)
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

server.listen(socketPort, ipAddress, () => {
    console.log(`sokects are listening on ${ipAddress}:${socketPort}`);
});

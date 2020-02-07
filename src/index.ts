import app from './App'
import * as http from 'http';
import * as socketServer from 'socket.io';

const server = http.createServer(app);
const io = socketServer(server);
const port = 3000;
const socketPort = 3001;

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
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

server.listen(socketPort, () => {
    console.log('listening sokects on 3001');
});

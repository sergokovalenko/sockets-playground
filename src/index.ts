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

io.on('connection', () => {
    console.log('socket connection');
});

server.listen(socketPort, function(){
    console.log('listening sokects on 3001');
});

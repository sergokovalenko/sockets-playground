declare var io: Function;

window.onload = () => {
    const socket = io('http://localhost:3001');
    const element = document.getElementById('form');
    const typer = document.getElementById('typer');
    const input = document.getElementsByTagName("input")[0];
    const messagesBlock = document.getElementById('messages');
    
    element.addEventListener('submit', e => {
        e.preventDefault();
        socket.emit('send', input.value);
        input.value = '';
    });

    input.addEventListener('input', e => {
        socket.emit('type', input.value);
    });

    socket.on('send', (msg: string) => {
        const li = document.createElement('li');

        li.innerText = msg;
        messagesBlock.append(li);
    });

    socket.on('setType', (msg: string) => {
        typer.innerText = msg;
    });
};

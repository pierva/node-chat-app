const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');



const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'pierva@example.com',
    //     text: 'Hey, what is happeningh',
    //     createdAt: 123
    // });

    socket.emit('newMessage', {
        from: 'Piervalerio',
        text: "Hello",
        createAt: new Date().getTime()
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('createMessage', (newMessage) => {
        console.log('Received new message', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected from server');
    })
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

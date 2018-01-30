var socket = io();
socket.on('connect', function (){
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: "xxx@example.com",
    //     text: "Hey this is Pierva"
    // });

    socket.emit('createMessage', {
        from: "Pierva",
        text: "Another new message"
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function (message) {
    console.log('Got new Message: ', message);
});
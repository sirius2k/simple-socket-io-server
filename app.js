var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userIndex = 0;

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/www/index.html");
});

io.on('connection', function(socket) {
    console.log('a user connected!');

    socket.on('message', echoMessage);

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

function echoMessage(msg) {
    console.log('message : ' + msg);

    io.emit('message', msg);
}

http.listen(3000, function() {
    console.log('listening on *:3000');
});
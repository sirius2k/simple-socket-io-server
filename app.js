var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = [];
var userIndex = 0;

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/www/index.html");
});

io.on('connection', function(socket) {
    var username = 'user' + userIndex;
    users[username] = username;
    userIndex++;

    console.log(username + ' connected!');

    socket.on('message', echoMessage);

    socket.on('getPost', getPost);

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    io.emit('connected', username);
});

function echoMessage(msg) {
    console.log('message : ' + msg);

    io.emit('message', msg);
}

function getPost(content) {
    console.log('getPost called. request = ' + JSON.stringify(content));

    var post = {
        id : content.id,
        title : 'title',
        body : 'test body',
        userId : 1
    };

    io.emit('getPost', post);
}

http.listen(3000, function() {
    console.log('listening on *:3000');
});
## Synopsis
This project is demo project for NodeJS server which is created on top of Express Framework and SocketIO. The objective of this project is to use SocketIO application quickly.

## Code Example
TBD

## Installation

In order to run demo, you have to install npm and Node.js. Please, refer to https://www.npmjs.com/get-npm.
For socket-io server, you need to install npm and node first. Then install socket.io in global.

```sh
$ npm install -g socket.io
```

To start server, just run app.js
```sh
$ node app.js
```
or
```sh
$ npm start
```

You can see chat app on your browser http://localhost:3000.

## API Reference



- message : echo will return the same message sent from client with 'message' event.
- getPost : return post object with 'getPost' event
```javascript
    {
        id : 'id',
        title : 'title',
        body : 'test body',
        userId : 1
    }
```
- connected : return username with index.

## Contributors
Park, KyoungWook (Kevin) / sirius00@paran.com

## License
This project is licensed under the MIT License
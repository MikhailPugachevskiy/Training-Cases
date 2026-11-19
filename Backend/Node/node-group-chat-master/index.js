const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.render('index.ejs');
});

io.sockets.on('connection', function (socket) {
    socket.on('username', function (username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function (username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function (message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});

const server = http.listen(8080, function () {
    console.log('listening on *:8080');
});

/*
mikha@LENOVOV15IWL UCRT64 ~/Documents/GitHub/Udemy/Backend/Node/node-group-chat-master (main)
$ ls
index.js  package.json  package-lock.json  README.md  views/

mikha@LENOVOV15IWL UCRT64 ~/Documents/GitHub/Udemy/Backend/Node/node-group-chat-master (main)
$ npm install
npm warn old lockfile
npm warn old lockfile The package-lock.json file was created with an old version of npm,
npm warn old lockfile so supplemental metadata must be fetched from the registry.
npm warn old lockfile
npm warn old lockfile This is a one-time fix-up, please be patient...
npm warn old lockfile
npm warn deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)

added 85 packages, and audited 86 packages in 14s

18 vulnerabilities (4 low, 2 moderate, 7 high, 5 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

mikha@LENOVOV15IWL UCRT64 ~/Documents/GitHub/Udemy/Backend/Node/node-group-chat-master (main)
$ node index.js
=> listening on *:8080*/
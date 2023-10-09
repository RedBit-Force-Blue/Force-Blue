'use strict'

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const port = process.env.PORT || 3020 || 3200;
const User = require('./../src/User/user.model');

const server = http.createServer(app);

const socketServer = new Server(server);

const userRoutes = require('../src/User/user.routes')
const tagRoutes = require('../src/Tag/tag.routes')
const chatRoutes = require('../src/Chat/chat.routes')

const userRoutes = require('../src/User/user.routes')
const tagRoutes = require('../src/Tag/tag.routes')
const chatRoutes = require('../src/Chat/chat.routes')


/* ----- CONFIG SERVER ----- */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

/* ----- SOCKET SERVER ----- */
var users = []
socketServer.on('connection', (socket) => {

    users.push({
        socketId: socket.id,
        userId: socket.userId
    })

    console.log('User after push', users)

    socket.on('sendmessage', ({ to, message }) => {

        const uid = users.find(item => item.userId === to)
        
        socket.to(uid.socketId).emit('newmessage', {
            message
        })
    })
})

socketServer.use((sock, next) => {
    const userId = sock.handshake.auth.userId;

    users = []
    for (let [id, socket] of socketServer.of('/').sockets) {
        if (socket.userId) {
            users.push({
                socketId: id,
                userId: socket.userId
            })
        }
    }

    sock.userId = userId;
    next()
})

/* ----- IMPORT ROUTES ----- */
app.use('/user', userRoutes)
app.use('/tag', tagRoutes)
app.use('/comment', require('../src/comment/comment.routes'));
app.use('/publication', require('../src/publication/publication.routes'));
app.use('/project', require('../src/project/project.routes'));
app.use('/chat', chatRoutes)

app.use('/user', userRoutes)
app.use('/tag', tagRoutes)
app.use('/chat', chatRoutes)

/* ----- DEPLOYED SERVER ----- */
exports.initServer = () => {
    server.listen(port);
    console.log(`Server HTTP running in port ${port}`);
}
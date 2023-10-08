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
const configCors = {
    cors: {
        origin: '*'
    }
}

const socketServer = new Server(server, configCors);

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
// socketServer.use(async (socket, next) => {
//     try {
//         const user = await User.findById(socket.handshake.auth.userLogged)
//     } catch (err) {
//         console.error(err)
//         next(new Error("Error getting user"))
//     }
// })

socketServer.on('connection', (socket) => {
    console.log(socket.connected)
    socket.on('send-message', (data) => {
        
        socket.emit('new-message', data)
    })
})

// socketServer.use((sock,  next)=> {
//     const user = sock.handshake.auth.userLogged;
//     //Validar que el usuario exista en la base de datos.S
//     if(!user) return next(new Error('Invalid username'))
//     sock.user = user;
//     next()
// })

/* ----- IMPORT ROUTES ----- */

app.use('/user', userRoutes)
app.use('/tag', tagRoutes)
app.use('/chat', chatRoutes)

/* ----- DEPLOYED SERVER ----- */
exports.initServer = () => {
    server.listen(port);
    console.log(`Server HTTP running in port ${port}`);
}
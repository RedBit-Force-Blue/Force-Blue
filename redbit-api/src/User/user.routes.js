'use strict'

const express = require('express')
const api = express.Router();

const userController = require('./user.controller');
const {ensureAuth, isAdmin} = require('../services/authenticated')
const connectMultiparty = require('connect-multiparty')
const upload = connectMultiparty({uploadDir: './uploads/User'})

// test
api.post('/login', userController.login)
api.get('/test', userController.test)

//create
api.post('/register', userController.register)

//create by admin
api.post('/registerAdmin',[ensureAuth,isAdmin], userController.registerAdmin)

// read
api.get('/getUser/:id', [ensureAuth], userController.getUser)
api.get('/getUsers', [ensureAuth], userController.getUsers)

//update 
api.put ('/updateUser/:id/:username',[ensureAuth], userController.UpdateUser )
api.put('/addTag/:id',[ensureAuth], userController.addTag)

//image
api.put('/uploadImage/:id',upload, userController.addImage);
api.get('/getImage/:fileName',upload, userController.getImage);
module.exports = api
'use strict'

const express = require('express')
const api = express.Router();

const { test, deleteChat, getChats, getChat, createChat, sendMessage, getMyMsg } = require('./chat.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated')

// test
api.get('/test', test)

api.post('/create', ensureAuth, createChat)
api.post('/send/:id', ensureAuth, sendMessage)

api.get('/get/:id', ensureAuth, getChat)
api.get('/get_mychats', ensureAuth, getChats)
api.get('/get_mymsg/:chat', ensureAuth, getMyMsg)

api.delete('/delete/:id', ensureAuth, deleteChat)


module.exports = api
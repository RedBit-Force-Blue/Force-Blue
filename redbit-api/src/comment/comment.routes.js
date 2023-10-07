'use strict'

const api = require('express').Router();
const commentController = require('./comment.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

/* ----- PRIVATE ----- */
api.post('/add', [ensureAuth], commentController.add);
api.put('/update/there*', [ensureAuth], commentController.upda);
api.put('/delete/there*', [ensureAuth], commentController.del);
api.put('/like/:commentId', [ensureAuth], commentController.like);

/* ----- PUBLIC ----- */
api.get('/test', commentController.test);

module.exports = api;
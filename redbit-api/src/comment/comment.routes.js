'use strict'

const api = require('express').Router();
const commentController = require('./comment.controller');

/* ----- PRIVATE ----- */

/* ----- PUBLIC ----- */
api.get('/test', commentController.test);

module.exports = api;
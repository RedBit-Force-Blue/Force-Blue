'use strinct'

const express = require('express');
const api = express.Router();

const tagController = require('./tag.controller');
const {ensureAuth, isAdmin} = require('../services/authenticated');

api.post('/createTag', [ensureAuth, isAdmin], tagController.addTag);
api.get('/getTag/:id', [ensureAuth], tagController.getTag);
api.get('/getTags', [ensureAuth], tagController.getTags);
api.put('/updateTag/:id', [ensureAuth, isAdmin], tagController.updateTag);
api.put('/deleteTag/:id', [ensureAuth, isAdmin], tagController.deleteTag);

module.exports = api;
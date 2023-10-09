'use strict'

const api = require('express').Router();
const publicationController = require('./publication.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

/* ----- PRIVATE ROUTES ----- */
// --- @admin --- //
api.get('/test', [ensureAuth, isAdmin], publicationController.test);

// --- @global --- //
api.put('/like/:publicationId', [ensureAuth], publicationController.like);
api.post('/create', [ensureAuth], publicationController.add);
api.put('/add-comment/there*', [ensureAuth], publicationController.addComment);
api.get('/get', [ensureAuth], publicationController.get);
api.get('/get/:publiId', [ensureAuth], publicationController.getOne);
api.put('/update/there*', [ensureAuth], publicationController.upda);
api.put('/delete/there*', [ensureAuth], publicationController.del);

/* ----- PUBLIC ROUTES ----- */
api.get('/get-public', publicationController.getNA);
api.get('/get-public/:publiId', publicationController.getOneNA);

module.exports = api;
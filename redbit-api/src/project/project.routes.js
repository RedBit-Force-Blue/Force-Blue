'use strict'

const api = require('express').Router();
const projectController = require('./project.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');
const mc = require('connect-multiparty');
const upload = mc();

/* ----- PRIVATE ROUTES ----- */
// --- @admin --- //
api.get('/test', [ensureAuth, isAdmin], projectController.test);

// --- @global --- //
api.post('/create', [ensureAuth], projectController.create);
api.get('/get', [ensureAuth], projectController.get);
api.get('/get/there*', [ensureAuth], projectController.getOne);
api.put('/upload-img/there*', [ensureAuth, upload], projectController.uploadImg);
api.put('/update/there*', [ensureAuth], projectController.upda);
api.put('/add-collaborator/there*', [ensureAuth], projectController.addCollab);
api.put('/add-comment/there*', [ensureAuth], projectController.addComment);
api.put('/add-publication/there*', [ensureAuth], projectController.addPubli);
api.put('/delete/there*', [ensureAuth], projectController.del);
api.put('/delete-collaborator/there*', [ensureAuth], projectController.delCollab);
api.put('/like/:projectId', [ensureAuth], projectController.like);

/* ----- PUBLIC ROUTES ----- */
api.get('/get-public', projectController.getNA);
api.get('/get-public/there*', projectController.getOneNA);

module.exports = api;
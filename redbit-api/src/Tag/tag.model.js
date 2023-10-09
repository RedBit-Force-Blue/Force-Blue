'use strict'

const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    versionKey: false,
});

module.exports = mongoose.model('Tag', tagSchema);
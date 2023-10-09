'use strict'

const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    b6u: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    deletedAt: {
        type: Date,
    },
}, {
    versionKey: false
});

module.exports = mongoose.model('File', fileSchema);
'use strict'

const mongoose = require('mongoose');

const publicactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    comments: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }]
    },
    likes: {
        users: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }]
        },
        like: {
            type: Number,
            default: 0
        }
    },
    tags: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag'
        }]
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
}, {
    versionKey: false,
});

module.exports = mongoose.model('Publication', publicactionSchema);
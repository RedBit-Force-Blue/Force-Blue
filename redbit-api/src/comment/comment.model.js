'use strict'

const mongoose = require('mongoose');

const commentShema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        required: true,
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

module.exports = mongoose.model('Comment', commentShema);
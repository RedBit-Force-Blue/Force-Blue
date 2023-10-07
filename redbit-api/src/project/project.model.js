'use strict'

const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    collaborators: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }]
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true,
    },
    commets: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }],
    },
    images: {
        type: [String]
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
    }
}, {
    versionKey: false
});
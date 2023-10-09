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
    publications: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Publication',
        }],
    },
    comments: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }],
    },
    images: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'File'
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
        default: true
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
    versionKey: false
});

module.exports = mongoose.model('Project', projectSchema);
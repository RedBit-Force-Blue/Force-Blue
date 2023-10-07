'use strict'

const mongoose = require('mongoose');

const publicactionSchema = mongoose.Schema({
    user: {
        tyep: mongoose.Schema.Types.ObjectId,
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
            unique: true
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
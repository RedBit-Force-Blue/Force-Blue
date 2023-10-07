'use strict'

const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    cid: {
        type: String,
        required: true
    },
    you: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lastMessage: {
        type: String,
        default: ''
    },
    lastMessageDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('Chat', chatSchema);
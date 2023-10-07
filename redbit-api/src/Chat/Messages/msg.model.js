'use strict'

const mongoose = require('mongoose')

const msgSchema = mongoose.Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    },
    messages : [{
        message: {
            type: String,
            required: true
        },
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
}, {
    versionKey: false
})

module.exports = mongoose.model('Message', msgSchema);
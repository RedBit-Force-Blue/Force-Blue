'use strict'

const Chat = require('./chat.model')
const Message = require('./Messages/msg.model')
const User = require('../User/user.model')

exports.test = (req, res) => {
    return res.send({ message: 'Chat test is running' })
}

exports.createChat = async (req, res) => {
    try {
        const { user } = req.body
        const you = req.user.sub
        const cid = `${you}-${user}`
        const chat = new Chat({ cid, you, user })
        await chat.save()

        const messages = new Message({ chat: chat._id })
        await messages.save()

        return res.send({ message: 'Chat created successfully', chat, messages })
    } catch (err) {
        return res.status(500).send({ message: 'Error creating chat', err })
    }
}

exports.getChats = async (req, res) => {
    try {
        const id = req.user.sub

        const chats = await Chat.find({ $or: [{ you: id }, { user: id }] })

        if (!chats) return res.status(404).send({ message: 'Chats not found' })

        return res.send({ message: 'Chats found', chats })
    } catch (err) {
        return res.status(500).send({ message: 'Error getting chats', err })
    }
}

exports.getChat = async (req, res) => {
    try {
        const { id } = req.params
        const chat = await Chat.findById(id)
        const user = await User.findById(req.user.sub)

        if (!chat) return res.status(404).send({ message: 'Chat not found' })
        
        const owner = chat.cid.split('-').find(item => item === req.user.sub)
        if (!owner && user.role !== "ADMIN") return res.status(403).send({ message: 'You are not allowed to see this chat' })

        return res.send({ message: 'Chat found', chat })
    } catch (err) {
        return res.status(500).send({ message: 'Error getting chat', err })
    }
}

exports.deleteChat = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(req.user.sub)

        if (user.role !== "ADMIN") return res.status(403).send({ message: 'You are not allowed to delete this chat' })

        await Chat.findByIdAndDelete(id)

        return res.send({ message: 'Chat deleted successfully' })

    } catch (err) {
        return res.status(500).send({ message: 'Error deleting chat', err })
    }
}

exports.sendMessage = async (req, res) => {
    try {
        const { id } = req.params

        const from = req.user.sub

        const { message } = req.body

        const chat = await Chat.findOneAndUpdate(
            { _id: id }, 
            { lastMessage: message, lastMessageDate: Date.now() },
            { new: true }
        )

        const item = chat.cid.split('-').find(item => item !== from)

        const messages = await Message.findOne({ chat: chat._id })
        messages.messages.push({ message, from, to: item })
        await messages.save()

        return res.send({ message: 'Message sent successfully', chat })
    } catch (err) {
        return res.status(500).send({ message: 'Error sending message', err })
    }
}

exports.getMyMsg = async (req, res) => {
    try {
        const { chat } = req.params
        const user = await User.findById(req.user.sub)
        const chatSelected = await Chat.findById(chat)
        const messages = await Message.findOne({ chat })

        if (!messages) return res.status(404).send({ message: 'Messages not found' })

        const owner = chatSelected.cid.split('-').find(item => item === req.user.sub)

        if (!owner && user.role !== "ADMIN") return res.status(403).send({ message: 'You are not allowed to see this messages' })

        return res.send({ message: 'Messages found', messages })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting my messages', err })
    }
}
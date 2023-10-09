'use strict'

const Comment = require('./comment.model');
const User = require('../User/user.model');
const Publication = require('../publication/publication.model');
const Project = require('../project/project.model');
const { verify } = require('../utils/validate');

/* --- ADD --- */
exports.add = async(req, res) => {
    try {
        const data = {
            user: req.user.sub,
            text: req.body.text,
        }
        const msg = verify(data);
        if (msg)
            return res.status(418).send(msg);
        if (!await User.findOne({ _id: data.user }))
            return res.status(404).send({ message: `User not found or not exist` });
        const comment = new Comment(data);
        await comment.save();
        return res.send({ message: `Commend added`, CI: comment._id });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error adding comment` });
    }
}

/* --- UPDATE --- */
exports.upda = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qui, qci } = req.query;
        const data = { text: req.body.text };
        const msg = verify(data);
        if (msg)
            return res.status(418).send(msg);
        const comment = await Comment.findOne({
            $and: [
                { _id: qci },
                { active: true }
            ]
        }).lean();
        if (!comment)
            return res.status(404).send({ message: `Comment not found or not exist` });
        if (!await User.findOne({ _id: qui }))
            return res.status(404).send({ message: `User not found or not exist` });
        if (comment.user != sub || qui != sub)
            return res.status(400).send({ message: `You cannot modify this comment` });
        if (comment.createdAt.getTime() != comment.updatedAt.getTime())
            if (Date.now() < ((new Date(comment.updatedAt).getTime()) + (1000 * 60 * 60 * 24 * 30)))
                return res.status(400).send({ message: `Time has not passed to be able to modify this comment again` });
        await Comment.updateOne({ _id: qci }, {
            $set: {
                text: data.text,
                updatedAt: new Date()
            }
        }, { new: true });
        return res.send({ message: `Comment updated successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error updating comment` });
    }
}

/* --- DELETE --- */
exports.del = async(req, res) => {
    try {
        const { role, sub } = req.user;
        const { qui, qci } = req.query;
        if (!await User.findOne({ _id: qui }))
            return res.status(404).send({ message: `User not found or not exist` });
        const comment = await Comment.findOne({
            $and: [
                { _id: qci },
                { active: true }
            ]
        }).lean();
        if (!comment)
            return res.status(404).send({ message: `Comment not found or not exist` });
        if (comment.user != sub || qui != sub)
            if (role != 'ADMIN')
                return res.status(400).send({ message: `You cannot delete this comment` });
        await Publication.updateMany({ comments: qci }, {
            $pull: { comments: qci }
        }, { new: true });
        await Project.updateMany({ comments: qci }, {
            $pull: { comments: qci }
        }, { new: true });
        await Comment.updateOne({ _id: qci }, {
            $set: { active: false }
        }, { new: true });
        return res.send({ message: `Comment deleted successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error deleting comment` });
    }
}

/* --- LIKE --- */
exports.like = async(req, res) => {
    try {
        const { sub } = req.user;
        const { commentId } = req.params;
        const comment = await Comment.findOne({ _id: commentId }).lean();
        if (!comment)
            return res.status(404).send({ message: `Comment not found or not exist` });
        if (
            await Comment.findOne({
                $and: [
                    { _id: commentId },
                    { 'likes.users': sub }
                ]
            })
        ) {
            await Comment.updateOne({ _id: commentId }, {
                $pull: { 'likes.users': sub },
                $inc: { 'likes.like': Number(-1) },
            }, { new: true });
            return res.send({ message: `Dislike to Comment` });
        } else {
            await Comment.updateOne({ _id: commentId }, {
                $push: { 'likes.users': sub },
                $inc: { 'likes.like': Number(1) },
            }, { new: true });
            return res.send({ message: `Like to Comment` });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error liked comment` });
    }
}

/* --- TEST --- */
exports.test = (req, res) => {
    return res.status(200).send({ message: `Hi Comments` });
}
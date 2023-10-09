'use strict'

const Publication = require('./publication.model');
const Tag = require('../Tag/tag.model');
const User = require('../User/user.model');
const Comment = require('../comment/comment.model');
const Projects = require('../project/project.model');
const { verify } = require('../utils/validate');

/* --- ADD --- */
exports.add = async(req, res) => {
    try {
        const { sub } = req.user;
        let data = {
            description: req.body.description,
            user: sub
        }
        const msg = verify(data);
        if (msg)
            return res.status(418).send(msg);
        req.body.title ? (data.title = req.body.title) : null;
        if (req.body.tags) {
            let n_tag = ''
            data.tags = [...new Set(req.body.tags)];
            for (const tag of data.tags) {
                if (!await Tag.findOne({ $and: [{ _id: tag }, { active: true }] }))
                    n_tag += `${tag} `;
            }
            if (n_tag)
                return res.status(404).send({ message: `Tags not exists ${n_tag}` });
        }
        if (!await User.findOne({ _id: sub }))
            return res.status(404).send({ message: `Usar not found or not exist` });
        const publication = new Publication(data);
        await publication.save();
        return res.send({ message: `Post completed`, PI: publication._id });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error adding publication` });
    }
}

/* --- GETs --- */
// All
exports.getNA = async(req, res) => {
    try {
        let publications = await Publication.find()
            .populate({
                path: 'user',
                select: '_id name surname image tags'
            })
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: '_id name surname image tags'
                }
            })
            .populate({
                path: 'tags',
                select: '_id name'
            }).lean();
        return res.send({ publications });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting publications` });
    }
}

exports.get = async(req, res) => {
    try {
        const { sub } = req.user;
        let publications = await Publication.find({ active: true })
            .populate({
                path: 'user',
                select: '_id name surname image tags'
            })
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: '_id name surname image tags'
                }
            })
            .populate({
                path: 'tags',
                select: '_id name'
            }).lean();
        for (const publi of publications) {
            const user_no_lk = publi.likes.users.findIndex(i => i == sub);
            if (user_no_lk > -1)
                publi.likes.lk = true;
            for (const com of publi.comments) {
                const user_no_lk_cm = com.likes.users.findIndex(a => a == sub);
                if (user_no_lk_cm > -1)
                    com.likes.lk = true;
            }
        }
        return res.send({ publications });

    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting publications` });
    }
}

// One
exports.getOneNA = async(req, res) => {
    try {
        const { publiId } = req.params;
        let publication = await Publication.findOne({
                $and: [
                    { _id: publiId },
                    { active: true }
                ]
            })
            .populate({
                path: 'user',
                select: '_id name surname image tags'
            })
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: '_id name surname image tags'
                }
            })
            .populate({
                path: 'tags',
                select: '_id name'
            }).lean();
        if (!publication)
            return res.status(404).send({ message: `Publication not found` });
        return res.send({ publication });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting publications` });
    }
}

exports.getOne = async(req, res) => {
    try {
        const { sub } = req.user;
        const { publiId } = req.params;
        let publication = await Publication.findOne({
                $and: [
                    { _id: publiId },
                    { active: true }
                ]
            })
            .populate({
                path: 'user',
                select: '_id name surname image tags'
            })
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: '_id name surname image tags'
                }
            })
            .populate({
                path: 'tags',
                select: '_id name'
            }).lean();
        if (!publication)
            return res.status(404).send({ message: `Publication not found` });
        const user_no_lk = publication.likes.users.findIndex(i => i == sub);
        if (user_no_lk > -1)
            publication.likes.lk = true;
        for (const com of publication.comments) {
            const user_no_lk_cm = com.likes.users.findIndex(a => a == sub);
            if (user_no_lk_cm > -1)
                com.likes.lk = true;
        }
        return res.send({ publication });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting publications` });
    }
}

/* --- COMMENTs --- */
exports.addComment = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qui, qpi, qci } = req.query;
        const comment = await Comment.findOne({
            $and: [
                { _id: qci },
                { active: true }
            ]
        }).lean();
        if (!comment)
            return res.status(404).send({ message: `Comment not found or not exist` });
        if (qui != sub || comment.user != sub)
            return res.status(403).send({ message: `You don have access` });
        if (!await Publication.findOne({ $and: [{ _id: qpi }, { active: true }] }))
            return res.status(404).send({ message: `Publication not found or not exist` });
        if (
            await Publication.findOne({
                $and: [
                    { comments: qci },
                ]
            })
        ) return res.status(400).send({ message: `The comment already exists in a post` });
        if (
            await Publication.findOne({
                $and: [
                    { _id: qpi },
                    { comments: qci }
                ]
            })
        ) return res.status(400).send({ message: `The comment already exists on this post.` });
        await Publication.updateOne({ _id: qpi }, {
            $push: { comments: qci }
        }, { new: true });
        return res.send({ message: `Cooment added` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error adding comment` });
    }
}

/* --- UPDATE --- */
exports.upda = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi } = req.query;
        const publication = await Publication.findOne({
            $and: [
                { _id: qpi },
                { active: true }
            ]
        }).lean();
        if (!publication)
            return res.status(404).send({ message: `Post not found or not exist` });
        if (publication.user != sub)
            return res.status(400).send({ message: `You cannot delete this post` });
        let data = {
            description: req.body.description,
            user: sub
        }
        const msg = verify(data);
        if (msg)
            return res.status(418).send(msg);
        req.body.title ? (data.title = req.body.title) : null;
        if (req.body.tags) {
            let n_tag = ''
            data.tags = [...new Set(req.body.tags)];
            for (const tag of data.tags) {
                if (!await Tag.findOne({ _id: tag }))
                    n_tag += `${tag} `;
            }
            if (n_tag)
                return res.status(418).send(n_tag);
        }
        await Publication.updateOne({ _id: qpi }, {
            $set: data,
            updatedAt: new Date()
        }, { new: true });
        return res.send({ message: `Post updated successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error updating post` });
    }
}

/* --- DELETE --- */
exports.del = async(req, res) => {
    try {
        const { sub, role } = req.user;
        const { qpi } = req.query;
        const publication = await Publication.findOne({
            $and: [
                { _id: qpi },
                { active: true }
            ]
        }).lean();
        if (!publication)
            return res.status(404).send({ message: `Post not found or not exist` });
        if (publication.user != sub)
            if (role != 'ADMIN')
                return res.status(400).send({ message: `You cannot delete this post` });
        await Projects.updateMany({ publications: qpi }, {
            $pull: { publications: qpi }
        }, { new: true });
        await Publication.updateOne({ _id: qpi }, {
            $set: { active: false }
        }, { new: true });
        return res.send({ message: `Post deleted` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error deleting post` });
    }
}

/* --- LIKE --- */
exports.like = async(req, res) => {
    try {
        const { sub } = req.user;
        const { publicationId } = req.params;
        const publication = await Publication.findOne({ _id: publicationId }).lean();
        if (!publication)
            return res.status(404).send({ message: `Publication not found or not exist` });
        if (
            await Publication.findOne({
                $and: [
                    { _id: publicationId },
                    { 'likes.users': sub }
                ]
            })
        ) {
            await Publication.updateOne({ _id: publicationId }, {
                $pull: { 'likes.users': sub },
                $inc: { 'likes.like': Number(-1) },
            }, { new: true });
            return res.send({ message: `Dislike to Publication` });
        } else {
            await Publication.updateOne({ _id: publicationId }, {
                $push: { 'likes.users': sub },
                $inc: { 'likes.like': Number(1) },
            }, { new: true });
            return res.send({ message: `Like to Publication` });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error like publish` });
    }
}

/* --- TEST --- */
exports.test = (req, res) => {
    return res.status(200).send({ message: `Hi Publications` });
}
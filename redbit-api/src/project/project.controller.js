'use strict'

const Project = require('./project.model');
const Publication = require('../publication/publication.model');
const User = require('../User/user.model');
const Tag = require('../Tag/tag.model');
const Comment = require('../comment/comment.model');
const File = require('../file/file.controller');
const { verify } = require('../utils/validate');

/* --- CREATE --- */
exports.create = async(req, res) => {
    try {
        const data = {
            owner: req.user.sub,
            name: req.body.name,
            description: req.body.description,
        }
        const msg = verify(data);
        if (msg)
            return res.status(418).send(msg);
        if (req.body.collaborators) {
            let n_coll = '';
            data.collaborators = [...new Set(req.body.collaborators)];
            for (const collab of data.collaborators) {
                if (!await User.findOne({ _id: collab }))
                    n_coll += `${collab} `
            }
            n_coll.trim();
            if (n_coll)
                return res.status(404).send({ message: `Collaborators not exists ${n_coll}` });
        }
        if (req.body.tags) {
            let n_tag = ''
            data.tags = [...new Set(req.body.tags)];
            for (const tag of data.tags) {
                if (!await Tag.findOne({ $and: [{ _id: tag }, { active: true }] }))
                    n_tag += `${tag} `;
            }
            n_tag.trim();
            if (n_tag)
                return res.status(404).send({ message: `Tags no exits ${n_tag}` });
        }
        const project = new Project(data);
        await project.save();
        return res.send({ message: `Project created successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error creating projects` });
    }
}

/* ----- GETs ----- */
// --- @private --- //
// All
exports.get = async(req, res) => {
    try {
        const { sub } = req.user;
        const projects = await Project.find({ active: true })
            .populate({
                path: 'owner',
                select: '_id name surname image tags'
            })
            .populate({
                path: 'collaborators',
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
            })
            .populate({
                path: 'images',
                select: '_id b6u'
            })
            .populate({
                path: 'publications',
                populate: [{
                    path: 'user',
                    select: '_id name surname image tags'
                }, {
                    path: 'comments',
                    populate: {
                        path: 'user',
                        select: '_id name surname image tags'
                    }
                }]
            }).lean();
        for (const pro of projects) {
            const user_no_lk = pro.likes.users.findIndex(s => s == sub);
            if (user_no_lk > -1)
                pro.likes.lk = true;
            for (const com of pro.comments) {
                const user_no_lk_cm = com.likes.users.findIndex(s => s == sub);
                if (user_no_lk_cm > -1)
                    com.likes.lk = true;
            }
            for (const publi of pro.publications) {
                const user_no_lk_pl = publi.likes.users.findIndex(i => i == sub);
                if (user_no_lk_pl > -1)
                    publi.likes.lk = true;
                for (const com of publi.comments) {
                    const user_no_lk_cm_pl = com.likes.users.findIndex(a => a == sub);
                    if (user_no_lk_cm_pl > -1)
                        com.likes.lk = true;
                }
            }
        }
        return res.send({ projects });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting projects` });
    }
}

// One
exports.getOne = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi } = req.query;
        const project = await Project.findOne({
                $and: [
                    { _id: qpi },
                    { active: true }
                ]
            })
            .populate({
                path: 'owner',
                select: '_id name surname image tags'
            })
            .populate({
                path: 'collaborators',
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
            })
            .populate({
                path: 'images',
                select: '_id b6u'
            })
            .populate({
                path: 'publications',
                populate: [{
                    path: 'user',
                    select: '_id name surname image tags'
                }, {
                    path: 'comments',
                    populate: {
                        path: 'user',
                        select: '_id name surname image tags'
                    }
                }]
            }).lean();
        if (!project)
            return res.status(404).send({ message: `Project not found or not exist` });
        const user_no_lk = project.likes.users.findIndex(s => s == sub);
        if (user_no_lk > -1)
            project.likes.lk = true;
        for (const com of project.comments) {
            const user_no_lk_cm = com.likes.users.findIndex(s => s == sub);
            if (user_no_lk_cm > -1)
                com.likes.lk = true;
        }
        for (const publi of project.publications) {
            const user_no_lk_pl = publi.likes.users.findIndex(i => i == sub);
            if (user_no_lk_pl > -1)
                publi.likes.lk = true;
            for (const com of publi.comments) {
                const user_no_lk_cm_pl = com.likes.users.findIndex(a => a == sub);
                if (user_no_lk_cm_pl > -1)
                    com.likes.lk = true;
            }
        }
        return res.send({ project });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting projects` });
    }
}

// --- @public --- //
// All
exports.getNA = async(req, res) => {
    try {
        const projects = await Project.find({ active: true })
            .populate({
                path: 'owner',
                select: '_id name surname image tags'
            })
            .populate({
                path: 'collaborators',
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
            })
            .populate({
                path: 'images',
                select: '_id b6u'
            })
            .populate({
                path: 'publications',
                populate: [{
                    path: 'user',
                    select: '_id name surname image tags'
                }, {
                    path: 'comments',
                    populate: {
                        path: 'user',
                        select: '_id name surname image tags'
                    }
                }]
            });
        return res.send({ projects });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting projects` });
    }
}

// One
exports.getOneNA = async(req, res) => {
    try {
        const { qpi } = req.query;
        const project = await Project.findOne({
                $and: [
                    { _id: qpi },
                    { active: true }
                ]
            })
            .populate({
                path: 'owner',
                select: '_id name surname image tags'
            })
            .populate({
                path: 'collaborators',
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
            })
            .populate({
                path: 'images',
                select: '_id b6u'
            })
            .populate({
                path: 'publications',
                populate: [{
                    path: 'user',
                    select: '_id name surname image tags'
                }, {
                    path: 'comments',
                    populate: {
                        path: 'user',
                        select: '_id name surname image tags'
                    }
                }]
            });
        if (!project)
            return res.status(404).send({ message: `Project not found or not exist` });
        return res.send({ project });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error getting projects` });
    }
}

/* --- UPDATEs --- */
// Project
exports.upda = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi } = req.query;
        const project = await Project.findOne({
            $and: [
                { _id: qpi },
                { active: true }
            ]
        }).lean();
        if (!project)
            return res.status(404).send({ message: `Project not found or not exist` });
        if (project.owner != sub)
            return res.status(403).send({ message: `You dont have access` });
        const data = {
            name: req.body.name,
            description: req.body.description,
        }
        const msg = verify(data);
        if (msg)
            return res.status(418).send(msg);
        if (req.body.tags) {
            let n_tag = ''
            data.tags = [...new Set(req.body.tags)];
            for (const tag of data.tags) {
                if (!await Tag.findOne({ $and: [{ _id: tag }, { active: true }] }))
                    n_tag += `${tag} `;
            }
            n_tag.trim();
            if (n_tag)
                return res.status(404).send({ message: `Tags no exits ${n_tag}` });
        }
        if (project.createdAt.getTime() != project.updatedAt.getTime())
            if (Date.now() < ((new Date(project.updatedAt).getTime()) + (1000 * 60 * 60 * 24 * 30)))
                return res.status(400).send({ message: `Time has not passed to be able to modify this project again` });
        await Project.updateOne({ _id: qpi }, {
            $set: data,
            updatedAt: new Date()
        }, { new: true });
        return res.send({ message: `Project updated successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error updating project` });
    }
}

// Upload Image
exports.uploadImg = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi } = req.query;
        const project = await Project.findOne({
            $and: [
                { _id: qpi },
                { active: true }
            ]
        }).lean();
        if (!project)
            return res.status(404).send({ message: `Project not found or not exist` });
        if (sub != project.owner)
            return res.status(403).send({ message: `You don hace access` });
        if (project.images.length > 0) {
            for (const img of project.images) {
                await File.del(img);
            }
        }
        const imgs = req.files.images;
        const n_imgs = [];
        if (Array.isArray(imgs)) {
            for (const img of imgs) {
                n_imgs.push(await File.save(img));
            }
        } else {
            n_imgs.push(await File.save(imgs));
        }
        await Project.updateOne({ _id: qpi }, {
            images: n_imgs
        }, { new: true });
        return res.send({ message: `Images upload` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error uploading image` });
    }
}

/* --- DELETEs --- */
// Project
exports.del = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi } = req.query;
        const project = await User.findOne({
            $and: [
                { _id: qpi },
                { active: true }
            ]
        }).lean();
        if (!project)
            return res.status(404).send({ message: `Project not found or not exist` });
        if (project.owner != sub)
            return res.status(403).send({ message: `You dont have access` });
        for (const com of project.comments) {
            await Comment.updateOne({ _id: com }, {
                $set: { active: false }
            }, { new: true });
        }
        await Project.updateOne({ _id: qpi }, {
            $set: { active: false }
        }, { new: true });
        return res.send({ message: `Project deleted successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error deletting project` });
    }
}

// Collaborators
exports.delCollab = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi, qci } = req.query;
        const collab = await User.findOne({ _id: qci });
        const project = await User.findOne({
            $and: [
                { _id: qpi },
                { active: true }
            ]
        }).lean();
        if (!collab)
            return res.status(404).send({ message: `User not found or not exist` });
        if (!project)
            return res.status(404).send({ message: `Project not found or not exist` });
        if (project.owner != sub)
            return res.status(403).send({ message: `You dont have access` });
        if (project.collaborators.findIndex(i => i == qci) >= 0)
            return res.status(400).send({ message: `User no exists on this project.` });
        await Project.updateOne({ _id: qpi }, {
            $pull: { collaborators: collab._id }
        }, { new: true });
        return res.send({ message: `Collaborator deleted on this project` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error deleting collab in this project` });
    }
}

/* --- ADDs --- */
// Collaborators
exports.addCollab = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi, qci } = req.query;
        const collab = await User.findOne({ _id: qci });
        const project = await User.findOne({
            $and: [
                { _id: qpi },
                { active: true }
            ]
        }).lean();
        if (!collab)
            return res.status(404).send({ message: `User not found or not exist` });
        if (!project)
            return res.status(404).send({ message: `Project not found or not exist` });
        if (project.owner != sub)
            return res.status(403).send({ message: `You dont have access` });
        if (project.collaborators.findIndex(i => i == qci) > -1)
            return res.status(400).send({ message: `User already exists on this project.` });
        await Project.updateOne({ _id: qpi }, {
            $push: { collaborators: collab._id }
        }, { new: true });
        return res.send({ message: `Collaborator added on this project` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error deleting collab in this project` });
    }
}

// Publication
exports.addPubli = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi, qpui } = req.query;
        const publication = await Publication.findOne({
            $and: [
                { _id: qpui },
                { active: true }
            ]
        }).lean();
        if (!publication)
            return res.status(404).send({ message: `Post not found or not exist` });
        if (publication.user != sub)
            return res.status(403).send({ message: `You don have access` });
        if (!await Project.findOne({ $and: [{ _id: qpi }, { active: true }] }))
            return res.status(404).send({ message: `Project not found or not exist` });
        if (
            await Project.findOne({
                $and: [
                    { publications: qpui },
                ]
            })
        ) return res.status(400).send({ message: `The post already exists in a project` });
        if (
            await Project.findOne({
                $and: [
                    { _id: qpi },
                    { publications: qpui }
                ]
            })
        ) return res.status(400).send({ message: `The post already exists on this project.` });
        await Project.updateOne({ _id: qpi }, {
            $push: { publications: qpui }
        }, { new: true });
        return res.send({ message: `Post added` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error adding post to projects` });
    }
}

// Comment
exports.addComment = async(req, res) => {
    try {
        const { sub } = req.user;
        const { qpi, qci } = req.query;
        const comment = await Comment.findOne({
            $and: [
                { _id: qci },
                { active: true }
            ]
        }).lean();
        if (!comment)
            return res.status(404).send({ message: `Comment not found or not exist` });
        if (comment.user != sub)
            return res.status(403).send({ message: `You don have access` });
        if (!await Project.findOne({ $and: [{ _id: qpi }, { active: true }] }))
            return res.status(404).send({ message: `Publication not found or not exist` });
        if (
            await Project.findOne({
                $and: [
                    { comments: qci },
                ]
            })
        ) return res.status(400).send({ message: `The comment already exists in a post` });
        if (
            await Project.findOne({
                $and: [
                    { _id: qpi },
                    { comments: qci }
                ]
            })
        ) return res.status(400).send({ message: `The comment already exists on this post.` });
        await Project.updateOne({ _id: qpi }, {
            $push: { comments: qci }
        }, { new: true });
        return res.send({ message: `Cooment added` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error adding comment` });
    }
}

/* --- LIKE --- */
exports.like = async(req, res) => {
    try {
        const { sub } = req.user;
        const { projectId } = req.params;
        const project = await Project.findOne({ _id: projectId }).lean();
        if (!project)
            return res.status(404).send({ message: `Project not found or not exist` });
        if (
            await Project.findOne({
                $and: [
                    { _id: projectId },
                    { 'likes.users': sub }
                ]
            })
        ) {
            await Project.updateOne({ _id: projectId }, {
                $pull: { 'likes.users': sub },
                $inc: { 'likes.like': Number(-1) },
            }, { new: true });
            return res.send({ message: `Dislike to Project` });
        } else {
            await Project.updateOne({ _id: projectId }, {
                $push: { 'likes.users': sub },
                $inc: { 'likes.like': Number(1) },
            }, { new: true });
            return res.send({ message: `Like to Project` });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error like Project` });
    }
}

/* --- TEST --- */
exports.test = (req, res) => {
    return res.status(200).send({ message: `Hi Projects` });
}
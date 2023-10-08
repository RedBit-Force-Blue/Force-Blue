'use strict'

const Tag = require('./tag.model');

exports.addTag = async(req, res) => {
    try {
        const data = req.body;
        const params = {
            name: data.name,
            active: data.active
        }
        const tag = new Tag(params);
        await tag.save();

        return res.send({message: 'Tag creado correctamente', tag: tag});

    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error al crear el tag'});
    }
}

exports.getTags = async(req, res) => {
    try {

        const tags = await Tag.find({active: true});

        return res.send({tags: tags});

    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error al obtener los tags'});
    }
}

exports.getTag = async(req, res) => {
    try {

        const tag = await Tag.findOne({active: true, _id: req.params.id});

        return res.send({tag: tag});

    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error al obtener el tag'});
    }
}

exports.updateTag = async(req, res) => {
    try {

        const idTag = req.params.id;
        const data = req.body;
        const params = {
            name: data.name
        }
        const updateTag = await Tag.findOneAndUpdate(
            {_id: req.params.id}, 
            params,
            {new: true}
        );

        if (!updateTag) {
            return res.status(400).send({message: 'No se ha encontrado el tag'});
        }

        return res.send({message: 'Tag actualizado correctamente', updateTag});

    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error al actualizar el tag'});
    }
}

exports.deleteTag = async(req, res) => {
    try {

        const idTag = req.params.id;
        const data = req.body;
        const params = {
            active: false
        }
        const deleteTag = await Tag.findOneAndUpdate(
            {_id: req.params.id}, 
            params,
            {new: true}
        );

        if (!deleteTag) {
            return res.status(400).send({message: 'No se ha encontrado el tag'});
        }

        return res.send({message: 'Tag eliminado correctamente', deleteTag});

    } catch (err) {
        console.log(err);
        return res.status(500).send({message: 'Error al eliminar el tag'});
    }
}
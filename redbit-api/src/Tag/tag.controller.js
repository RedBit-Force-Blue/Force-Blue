
'use strict'

const Tag = require('./tag.model');

const tags =[
    {name:'missions' , active: true},
    {name:'Spaceships and Rockets' , active: true},
    {name:'Communicating with Missions' , active: true},
    {name:'Artemis' , active: true},
    {name:'James Webb Space Telescope' , active: true},
    {name:'Hubble Space Telescope' , active: true},
    {name:'International Space Station' , active: true},
    {name:'OSIRIS-REx' , active: true},
    {name:'Humans in the space' , active: true},
    {name:'Why Go to Space' , active: true},
    {name:'Astronauts' , active: true},
    {name:'Commercial Space' , active: true},
    {name:'Destinations' , active: true},
    {name:'Spaceships and Rockets' , active: true},
    {name:'Living in Space' , active: true},
    {name:'Earth & Climate' , active: true},
    {name:'Explore Earth Science' , active: true},
    {name:'Climate Change' , active: true},
    {name:'Earth, Our Planet' , active: true},
    {name:'Earth Science in Action' , active: true},
    {name:'Earth Multimedia' , active: true},
    {name:'Earth Data' , active: true},
    {name:'Earth Science Researchers' , active: true},
]

exports.addTag = async(req, res) => {
    try {
        
        await Promise.all(tags.map(async taged=>{
            const tag = new Tag(taged);
           await tag.save();

        })

        )
        console.log( 'Tag creado correctamente');

    } catch (err) {
        console.log(err);
    }
}

exports.getTags = async(req, res) => {
    try {

        const tags = await Tag.find({active: true});

        return res.send({ tags});

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
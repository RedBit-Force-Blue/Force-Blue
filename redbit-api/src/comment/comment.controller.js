'use strict'

const Comment = require('./comment.model');
const { verify } = require('../utils/validate');

/* --- ADD --- */
exports.add = async(req, res) => {
    try {
        const data = {
            user: req.body.user,
            text: req.body.text,
        }
        const msg = verify(data);
        if (msg)
            return res.status(418).send(msg);
        /*
        if(!await User.findOne({_id: data.user}))
          return res.status(404).send({message: `User not found or not exist`}); 
        */
        const comment = new Comment(data);
        await comment.save();
        return res.send({ message: `Commend added`, CI: comment._id });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: `Error adding comment` });
    }
}

/* --- UPDATE --- */

/* --- DELETE --- */

/* --- TEST --- */
exports.test = (req, res) => {
    return res.status(200).send({ message: `Hi Comments` });
}
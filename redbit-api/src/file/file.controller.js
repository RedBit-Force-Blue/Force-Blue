'use strict'

const File = require('./file.model');
const fs = require('fs')

/* --- SAVE --- */
exports.save = async(file = {}) => {
    try {
        const file_64 = fs.readFileSync(`${file.path}`);
        const b_64 = file_64.toString('base64url');
        const data = {
                b6u: `data:${file.type};base64,${b_64}`,
                name: file.name,
                type: file.type,
                size: file.size
            }
            //const im = fs.
        const f = new File(data);
        await f.save();
        return f._id;
    } catch (err) {
        console.error(err);
        return err;
    }
}

/* --- DELETE --- */
exports.del = async(f_id = '') => {
    try {
        const file = await File.findOne({
            $and: [
                { _id: f_id },
                { active: true }
            ]
        });
        if (!file)
            return false;
        await File.updateOne({ _id: f_id }, {
            $set: {
                active: false,
                deletedAt: new Date()
            }
        }, { new: true });
        return true;
    } catch (err) {
        console.error(err);
        return err;
    }
}
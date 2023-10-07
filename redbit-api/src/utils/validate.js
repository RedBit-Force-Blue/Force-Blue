'use strict'

const bcrypt = require('bcrypt');

/* --- ENCRYOP --- */
exports.encrypt = async(data = '') => {
    try {
        return await bcrypt.hash(data, 10);
    } catch (err) {
        console.error(err);
        return err;
    }
}

/* --- CHECK HASH --- */
exports.check = async(text = '', hash = '') => {
    try {
        return await bcrypt.compare(text, hash);
    } catch (err) {
        console.error(err);
        return err;
    }
}

/* --- VALIDATE DATA --- */
exports.verify = (data = {}) => {
    const keys = Object.keys(data);
    let msg = '';
    for (const key of keys) {
        if (data[key] !== null &&
            data[key] !== undefined &&
            data[key] !== '') continue
        msg += `Param ${key} is required\n`;
    }
    return msg.trim();
}
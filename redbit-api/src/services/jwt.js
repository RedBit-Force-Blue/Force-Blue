'use strict'
// CREACION DE TOKEN
const jwt = require('jsonwebtoken');

exports.createToken = async(user)=>{
    try {
        let payload ={
            sub: user._id,
            name: user.name, 
            surname: user.surname,
            lastname: user.lastname,
            email: user.email, 
            role: user.role,
            iat: Math.floor(Date.now()/1000), 
            exp: Math.floor(Date.now()/ 1000)+(60*300)           
        }
        return jwt.sign(payload, `${process.env.SECRET_KEY}`);
    } catch (err) {
        console.error(err);
        return err;
    }
}
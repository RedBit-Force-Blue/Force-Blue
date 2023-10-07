'use strict'

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3020 || 3200;

const userRoutes = require('../src/User/user.routes')


/* ----- CONFIG SERVER ----- */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

/* ----- IMPORT ROUTES ----- */
app.use('/comment', require('../src/comment/comment.routes'));

app.use('/user', userRoutes)

/* ----- DEPLOYED SERVER ----- */
exports.initServer = () => {
    app.listen(port);
    console.log(`Server HTTP running in port ${port}`);
}
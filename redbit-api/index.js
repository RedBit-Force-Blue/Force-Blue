'use strict'

require('dotenv').config();

const { initServer } = require('./configs/app');
const { connect } = require('./configs/mongo');

const { userDefault } = require('./src/User/user.controller')

initServer();
connect();
userDefault();

'use strict'

require('dotenv').config();

const { initServer } = require('./configs/app');
const { connect } = require('./configs/mongo');

const admin = require('./src/User/user.controller')

initServer();
connect();
admin.userDefault();
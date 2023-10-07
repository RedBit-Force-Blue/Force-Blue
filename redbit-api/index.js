'use strict'

require('dotenv').config();

const { initServer } = require('./configs/app');
const { connect } = require('./configs/mongo');

initServer();
connect();
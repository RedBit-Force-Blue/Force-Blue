'use strict'

require('dotenv').config();

const { initServer } = require('./configs/app');
const { connect } = require('./configs/mongo');

const { userDefault } = require('./src/User/user.controller')
const tags = require('./src/Tag/tag.controller')
initServer();
connect();
userDefault();
tags.addTag()
const express = require('express');
const path = require('path');
const logger = require('morgan');

// Database setup
require ('./config/database')

const usersRouter = require('./app/routes/users');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);

module.exports = app;   
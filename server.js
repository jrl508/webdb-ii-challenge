const express = require('express');
const server = express();
const carsRouter = require('./cars/carsRouter');

server.use(logger);
server.use('/cars', carsRouter);

function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} from ${req.url}`
    );
    next();
  };
  

module.exports = server;
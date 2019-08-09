const express = require('express');
const helmet = require('helmet');
// const carsRouter = require('./routers/carsRouter.js');
// const salesRouter = require('./routers/salesRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
// server.use('/api/cars', carsRouter);
// server.use('/api/sales', salesRouter);

server.get('/', (req, res) => {
  res.send(`
  <h1>Web DB II Challenge!</h1>
  <p>Please see the <a href='https://github.com/ericlugo/webdb-ii-challenge'>README</a> for more information on where to go!</p>
  `);
});

module.exports = server;

const express = require('express');
const routes = require('./routes');

const createServer = async ({ config: { port } }) => {
  const server = express();
  server.use('/marsRover', routes);
  server.listen(port, error => {
    if (error) {
      throw new Error(error);
    }
    // eslint-disable-next-line no-console
    console.log(`Server listening on port: ${port}`);
  });
};

module.exports = createServer;

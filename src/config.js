// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

const { INFRASTRUCTURE_WEBSERVER_PORT } = process.env;

module.exports = {
  webserver: {
    port: parseInt(INFRASTRUCTURE_WEBSERVER_PORT, 10),
  },
};

//testing CI
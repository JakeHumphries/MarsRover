// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

const { INFASTRUCTURE_WEBSERVER_PORT } = process.env;

module.exports = {
  webserver: {
    port: parseInt(INFASTRUCTURE_WEBSERVER_PORT, 10),
  },
};

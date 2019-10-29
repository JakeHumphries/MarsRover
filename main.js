const createServer = require('./src/frameworks/Webserver/index');
const config = require('./config');

const start = async () => {
  await createServer({ config: config.webserver });
};

start();

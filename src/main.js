const createServer = require('./frameworks/Webserver/index');
const config = require('./config');

const start = async () => {
  await createServer({ config: config.webserver });
};

start();

//test 1
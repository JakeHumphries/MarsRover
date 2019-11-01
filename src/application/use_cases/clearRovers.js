const ActiveRovers = require('../../enterprise/entities/ActiveRovers');

module.exports = () => {
  ActiveRovers.removeRovers();
};

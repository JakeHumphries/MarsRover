const ActiveRovers = require('../../enterprise/entities/ActiveRovers');
const validate = require('./utils/validate');

const activeRovers = new ActiveRovers();

module.exports = () => {
  validate.checkRoversOnGrid();
  return activeRovers.arr;
};

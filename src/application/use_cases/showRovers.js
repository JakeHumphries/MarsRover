const ActiveRovers = require('../../enterprise/entities/ActiveRovers');

const activeRovers = new ActiveRovers();

module.exports = () => {
  if (activeRovers.arr.length < 1) {
    throw new Error('No rovers on the grid');
  }
  return activeRovers.arr;
};

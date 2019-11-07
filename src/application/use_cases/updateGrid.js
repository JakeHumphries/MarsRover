const grid = require('../../enterprise/entities/grid');
const ActiveRovers = require('../../enterprise/entities/ActiveRovers');

const activeRovers = new ActiveRovers();

module.exports = (gridX, gridY) => {
  if (!parseInt(gridX, 10) || !parseInt(gridY, 10)) {
    throw new Error('Grid coordinates are not integers');
  }
  if (parseInt(gridX, 10) < 0 || parseInt(gridY, 10) < 0) {
    throw new Error('Grid coordinates cannot be minus');
  }
  activeRovers.arr = [];
  grid.gridX = parseInt(gridX, 10);
  grid.gridY = parseInt(gridY, 10);
};

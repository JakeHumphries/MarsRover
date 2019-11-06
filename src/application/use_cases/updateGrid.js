const grid = require('../../enterprise/entities/grid');
const ActiveRovers = require('../../enterprise/entities/ActiveRovers');

const activeRovers = new ActiveRovers();

module.exports = (gridX, gridY) => {
  if (!parseInt(gridX, 10) || !parseInt(gridY, 10)) {
    throw new Error('Grid coordinates are not integers');
  }
  activeRovers.arr = [];
  grid.gridX = parseInt(gridX, 10);
  grid.gridY = parseInt(gridY, 10);
  console.log(gridX, gridY, grid);
};

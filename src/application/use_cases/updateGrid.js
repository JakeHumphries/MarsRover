const grid = require('../../enterprise/entities/grid');
const ActiveRovers = require('../../enterprise/entities/ActiveRovers');
const validate = require('./utils/validate');

const activeRovers = new ActiveRovers();

module.exports = (gridX, gridY) => {
  validate.checkGridCoordinates(gridX, gridY);
  activeRovers.arr = [];
  grid.gridX = parseInt(gridX, 10);
  grid.gridY = parseInt(gridY, 10);
};

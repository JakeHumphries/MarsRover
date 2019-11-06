const Rover = require('../../enterprise/entities/Rover');
const validate = require('./utils/validate');
const grid = require('../../enterprise/entities/grid');
const ActiveRovers = require('../../enterprise/entities/ActiveRovers');

const activeRovers = new ActiveRovers();

module.exports = (roverID, currentX, currentY, currentDir) => {
  validate.checkRoverDetails(roverID, currentX, currentY, grid);
  activeRovers.arr.push(new Rover(roverID, currentX, currentY, currentDir));
  console.log(activeRovers.arr);
};

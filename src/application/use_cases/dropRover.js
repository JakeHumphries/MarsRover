const Rover = require('../../enterprise/entities/Rover');
const validate = require('./utils/validate');

global.activeRovers = [];

const gridSize = '5x5';
const gridObj = { x: parseInt(gridSize.charAt(0), 10), y: parseInt(gridSize.charAt(2), 10) };

module.exports = (roverID, startingX, startingY, startingDir) => {
  // check if grid exists
  validate.checkRoverDetails(roverID, startingX, startingY, gridObj);
  activeRovers.push(new Rover(roverID, startingX, startingY, startingDir));
  console.log(activeRovers);
};

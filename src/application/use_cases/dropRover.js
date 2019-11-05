const Rover = require('../../enterprise/entities/Rover');
const validate = require('./utils/validate');
const ActiveRovers = require('../../enterprise/entities/ActiveRovers');

// **MOCK FOR NOW** will be replaced eventually
const gridSize = '5x5';
const gridObj = { x: parseInt(gridSize.charAt(0), 10), y: parseInt(gridSize.charAt(2), 10) };

module.exports = (roverID, currentX, currentY, currentDir) => {
  // check if grid exists
  validate.checkRoverDetails(roverID, currentX, currentY, gridObj);
  ActiveRovers.addRover(new Rover(roverID, currentX, currentY, currentDir));
  console.log(ActiveRovers.getRovers());
};

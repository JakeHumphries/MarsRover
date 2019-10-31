const Rover = require('../../enterprise/entities/Rover');

global.activeRovers = [];

const CheckRoverDetails = (roverID, startingX, startingY) => {
  activeRovers.forEach(element => {
    if (roverID === element.id) {
      throw new Error('RoverID already exists');
    }
    if (startingX === element.startingX && startingY === element.startingY) {
      throw new Error('Rover already exists on starting position');
    }
  });
  //check if the rover is within the grid
};

module.exports = (roverID, startingX, startingY, startingDir) => {
  //check if grid exists
  CheckRoverDetails(roverID, startingX, startingY);
  activeRovers.push(new Rover(roverID, startingX, startingY, startingDir));
  console.log(activeRovers);
};
 
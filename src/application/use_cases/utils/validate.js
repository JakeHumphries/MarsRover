const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');

exports.checkRoverDetails = (roverID, startingX, startingY, grid) => {
  if (!parseInt(startingX, 10) || !parseInt(startingY, 10)) {
    throw new Error('Rover starting co ordinates are not integers');
  }
  startingX = parseInt(startingX, 10);
  startingY = parseInt(startingY, 10);
  if (startingX > grid.x || startingY > grid.y) {
    throw new Error('Rover would be outside the bounds of the grid');
  }

  ActiveRovers.getRovers().forEach(element => {
    if (roverID === element.id) {
      throw new Error('RoverID already exists');
    }
    if (startingX === element.currentX && startingY === element.currentY) {
      throw new Error('Rover already exists on starting position');
    }
  });
};

exports.checkRoute = (x, y, gridSize) => {
  if (x > gridSize.x || y > gridSize.y) {
    throw new Error('Rover would leave grid! enter new move instructions');
  }
  ActiveRovers.getRovers().forEach(element => {
    if (x === element.currentX && y === element.currentY) {
      console.log(x, y, element);
      throw new Error(`Rover already exists on the route at position ${x},${y}`);
    }
  });
};

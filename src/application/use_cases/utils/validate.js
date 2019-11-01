exports.checkRoverDetails = (roverID, startingX, startingY, grid) => {
  if (!parseInt(startingX, 10) || !parseInt(startingY, 10)) {
    throw new Error('Rover starting co ordinates are not integers');
  }
  startingX = parseInt(startingX, 10);
  startingY = parseInt(startingY, 10);
  if (startingX > grid.x || startingY > grid.y) {
    throw new Error('Rover would be outside the bounds of the grid');
  }
  activeRovers.forEach(element => {
    if (roverID === element.id) {
      throw new Error('RoverID already exists');
    }
    if (startingX === element.startingX && startingY === element.startingY) {
      throw new Error('Rover already exists on starting position');
    }
  });
};

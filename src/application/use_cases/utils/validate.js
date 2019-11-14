const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');

const activeRovers = new ActiveRovers();

exports.checkRoverDetails = (roverID, startingX, startingY, grid) => {
  if (
    (!parseInt(startingX, 10) && parseInt(startingX, 10) !== 0) ||
    (!parseInt(startingY, 10) && parseInt(startingY, 10) !== 0) ||
    startingX.indexOf('.') !== -1 ||
    startingY.indexOf('.') !== -1
  ) {
    throw new Error('Rover starting co ordinates are not integers');
  }
  startingX = parseInt(startingX, 10);
  startingY = parseInt(startingY, 10);
  if (startingX > grid.gridX || startingY > grid.gridY || startingX < 0 || startingY < 0) {
    throw new Error('Rover would be outside the bounds of the grid');
  }

  activeRovers.arr.forEach(element => {
    if (roverID === element.id) {
      throw new Error('RoverID already exists');
    }
    if (startingX === element.currentX && startingY === element.currentY) {
      throw new Error('Rover already exists on starting position');
    }
  });
};

exports.checkRoute = (x, y, gridSize) => {
  if (x > gridSize.gridX || y > gridSize.gridY || x < 0 || y < 0) {
    throw new Error('Rover would leave grid! enter new move instructions');
  }
  activeRovers.arr.forEach(element => {
    if (x === element.currentX && y === element.currentY) {
      console.log(x, y, element);
      throw new Error(`Rover already exists on the route at position ${x},${y}`);
    }
  });
};

exports.checkMoveRover = roverId => {
  if (!activeRovers.getRoverById(roverId)) {
    throw new Error(`roverID ${roverId} doesnt exist`);
  }
};

exports.checkMoveInstructions = (moveInstructionArr, i) => {
  if (!moveInstructionArr[i] || parseInt(moveInstructionArr[i], 10)) {
    throw new Error(`Move instructions are incorrect`);
  }
  if (moveInstructionArr[i] !== 'L' && moveInstructionArr[i] !== 'R' && moveInstructionArr[i] !== 'M') {
    throw new Error('Move instruction must be L R or M');
  }
};

exports.checkRoversOnGrid = () => {
  if (activeRovers.arr.length < 1) {
    throw new Error('No rovers on the grid');
  }
};

exports.checkGridCoordinates = (gridX, gridY) => {
  if (!parseInt(gridX, 10) || !parseInt(gridY, 10) || gridX.indexOf('.') !== -1 || gridY.indexOf('.') !== -1) {
    throw new Error('Grid coordinates are not integers');
  }
  if (parseInt(gridX, 10) < 0 || parseInt(gridY, 10) < 0) {
    throw new Error('Grid coordinates cannot be minus');
  }
};

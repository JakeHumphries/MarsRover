const ActiveRovers = require('../../enterprise/entities/ActiveRovers');
const getDirection = require('./utils/getDirection');
const getNextCoordinate = require('./utils/getNextCoordinate');
const validate = require('./utils/validate');

const gridSize = '5x5';
const gridObj = { x: parseInt(gridSize.charAt(0), 10), y: parseInt(gridSize.charAt(2), 10) };

module.exports = (roverId, moveInstructions) => {
  if (!ActiveRovers.getRoverById(roverId)) {
    throw new Error(`roverID ${roverId} doesnt exist`);
  }
  let currentRover = ActiveRovers.getRoverById(roverId);
  const moveInstructionArr = moveInstructions.split('');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < moveInstructionArr.length; i++) {
    if (moveInstructionArr[i] === 'L' || moveInstructionArr[i] === 'R') {
      currentRover.currentDir = getDirection(currentRover.currentDir, moveInstructionArr[i]);
    }
    if (moveInstructionArr[i] === 'M') {
      currentRover = getNextCoordinate(currentRover);
      validate.checkRoute(currentRover.currentX, currentRover.currentY, gridObj);
    }
  }
  ActiveRovers.updateRover(currentRover);
  return currentRover;
};

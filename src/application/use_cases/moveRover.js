const getDirection = require('./utils/getDirection');
const getNextCoordinate = require('./utils/getNextCoordinate');
const validate = require('./utils/validate');
const grid = require('../../enterprise/entities/grid');
const ActiveRovers = require('../../enterprise/entities/ActiveRovers');

const activeRovers = new ActiveRovers();

module.exports = (roverId, moveInstructions) => {
  if (!activeRovers.getRoverById(roverId)) {
    throw new Error(`roverID ${roverId} doesnt exist`);
  }
  if (!moveInstructions || parseInt(moveInstructions, 10)) {
    throw new Error(`Move instructions are incorrect`);
  }
  let currentRover = activeRovers.getRoverById(roverId);
  const moveInstructionArr = moveInstructions.split('');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < moveInstructionArr.length; i++) {
    if (moveInstructionArr[i] === 'L' || moveInstructionArr[i] === 'R') {
      currentRover.currentDir = getDirection(currentRover.currentDir, moveInstructionArr[i]);
    }
    if (moveInstructionArr[i] === 'M') {
      currentRover = getNextCoordinate(currentRover);
      validate.checkRoute(currentRover.currentX, currentRover.currentY, grid);
    }
  }
  activeRovers.updateRover(currentRover);
  return currentRover;
};

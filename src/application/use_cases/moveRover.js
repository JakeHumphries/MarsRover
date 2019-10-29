const checkDirection = require('./utils/checkDirection');
const getNewCoordinates = require('./utils/getNewCoordinates');
const checkRoute = require('./utils/checkRoute');
const checkCoordinates = require('./utils/checkCoordinates');

module.exports = (currentPosition, moveInstructions, gridSize = '5x5') => {
  const currentPositionArr = checkCoordinates(currentPosition);
  const currentX = parseInt(currentPositionArr[0], 10);
  const currentY = parseInt(currentPositionArr[1], 10);
  let currentDir = currentPositionArr[2];
  let finalCoordinates = { currentDir, currentX, currentY };
  const moveInstructionArr = moveInstructions.split('');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < moveInstructionArr.length; i++) {
    if (moveInstructionArr[i] === 'L' || moveInstructionArr[i] === 'R') {
      currentDir = checkDirection(currentDir, moveInstructionArr[i]);
    }
    if (moveInstructionArr[i] === 'M') {
      finalCoordinates = getNewCoordinates(currentDir, finalCoordinates.currentX, finalCoordinates.currentY);
      checkRoute(finalCoordinates.currentX, finalCoordinates.currentY, gridSize);
    }
  }
  return finalCoordinates;
};

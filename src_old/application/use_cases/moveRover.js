const checkDirection = require('./utils/checkDirection');
const getNewCoordinates = require('./utils/getNewCoordinates');
const checkRoute = require('./utils/checkRoute');
const checkCoordinates = require('./utils/checkCoordinates');
const Rover = require('../../Rover');

//examples rovers=12N,24E
//input string=gridsize:5x5.name:rover1,startingposition:12N,moveinstruction:MRM.name:rover2,startingposition:34W,moveinstruction:LMLM


module.exports = (currentPosition, moveInstructions, gridSize = '5x5') => {
  console.log(currentPosition);
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

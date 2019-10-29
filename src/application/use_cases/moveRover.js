const checkDirection = require('./utils/checkDirection');
const getNewCoordinates = require('./utils/getNewCoordinates');

module.exports = (currentPosition, moveInstructions) => {
  const currentX = parseInt(currentPosition[0], 10);
  const currentY = parseInt(currentPosition[1], 10);
  let currentDir = currentPosition[2];
  let finalCoordinates = { currentDir, currentX, currentY };
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < moveInstructions.length; i++) {
    if (moveInstructions[i] === 'L' || moveInstructions[i] === 'R') {
      currentDir = checkDirection(currentDir, moveInstructions[i]);
    }
    if (moveInstructions[i] === 'M') {
      finalCoordinates = getNewCoordinates(currentDir, finalCoordinates.currentX, finalCoordinates.currentY);
    }
  }
  return finalCoordinates;
};

// input grid size: 5 5 , starting co ords: 1 2 N, move directions LMLMRMRMLM

const testGridInput = 55;
const testStartingPosition = '12N';
const testMoveDirection = 'LMMR';

const checkDirection = (currentDir, rotation) => {
  if (currentDir === 'N' && rotation === 'L') {
    return 'W';
  }
  if (currentDir === 'N' && rotation === 'R') {
    return 'E';
  }
  if (currentDir === 'E' && rotation === 'L') {
    return 'N';
  }
  if (currentDir === 'E' && rotation === 'R') {
    return 'S';
  }
  if (currentDir === 'S' && rotation === 'L') {
    return 'E';
  }
  if (currentDir === 'S' && rotation === 'R') {
    return 'W';
  }
  if (currentDir === 'W' && rotation === 'L') {
    return 'S';
  }
  if (currentDir === 'W' && rotation === 'R') {
    return 'N';
  }
  throw new Error('Initial Direction or rotation is incorrect');
};

const newXY = (currentDir, currentX, currentY) => {
  if (currentDir === 'N') {

  }
}

const moveDirArray = testMoveDirection.split('');
const currentPosition = testStartingPosition.split('');

const moveRover = (initialPosition, moveDirections) => {
  // go from 1,2 N to L M
  const currentX = currentPosition[0];
  const currentY = currentPosition[1];
  let currentDir = currentPosition[2];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < moveDirections.length; i++) {
    if (moveDirections[i] === 'L' || moveDirections[i] === 'R') {
      currentDir = checkDirection(currentDir, moveDirections[i]);
    }
    if (moveDirections[i] === 'M') {}
  }
};

moveRover(currentPosition, moveDirArray);

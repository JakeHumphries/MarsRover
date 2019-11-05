module.exports = ({ id, currentX, currentY, currentDir }) => {
  switch (currentDir) {
    case 'N':
      currentY += 1;
      break;
    case 'E':
      currentX += 1;
      break;
    case 'S':
      currentY -= 1;
      break;
    case 'W':
      currentX -= 1;
      break;
    default:
      throw new Error('current direction is incorrect');
  }
  return { id, currentX, currentY, currentDir };
};

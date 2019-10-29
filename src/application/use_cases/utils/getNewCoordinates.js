module.exports = (currentDir, currentX, currentY) => {
  if (currentDir === 'N') {
    currentY += 1;
    return { currentDir, currentX, currentY };
  }
  if (currentDir === 'E') {
    currentX += 1;
    return { currentDir, currentX, currentY };
  }
  if (currentDir === 'S') {
    currentY -= 1;
    return { currentDir, currentX, currentY };
  }
  if (currentDir === 'W') {
    currentX -= 1;
    return { currentDir, currentX, currentY };
  }
  throw new Error('current direction is incorrect');
};
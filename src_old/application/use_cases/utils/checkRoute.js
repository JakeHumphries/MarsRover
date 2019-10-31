module.exports = (x, y, gridSize) => {
  if (gridSize.length > 5 || gridSize.indexOf('x') < 0) {
    throw new Error('incorrect Grid entry try format: 5x5');
  }
  const gridSizeArr = gridSize.split('x');
  if (x > gridSizeArr[0] || y > gridSizeArr[2]) {
    throw new Error('Rover would leave grid! enter new move instructions');
  }
};

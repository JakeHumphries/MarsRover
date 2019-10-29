module.exports = (currentDir, rotation) => {
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

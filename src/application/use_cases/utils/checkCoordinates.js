module.exports = currentPosition => {
  if (!currentPosition || currentPosition.length > 3) {
    throw new Error('Starting Position is invalid');
  }
  const currentPositionArr = currentPosition.split('');
  return currentPositionArr;
};

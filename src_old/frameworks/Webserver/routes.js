const router = require('express').Router();
const moveRover = require('../../../src_old/application/use_cases/moveRovers/moveRover');

global.globalobject = [];

router.get('/getfinalCoordinates', (req, res) => {
  const { startingPosition } = req.query;
  const { moveInstructions } = req.query;
  const { gridSize } = req.query;
  const finalCoordinates = moveRover(startingPosition, moveInstructions, gridSize);
  globalobject.push(startingPosition);
  res.json(
    `You're final Direction is ${finalCoordinates.currentDir} and you're final position is ${finalCoordinates.currentX},${finalCoordinates.currentY} ${globalobject}`,
  );
});

module.exports = router;

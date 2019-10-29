const router = require('express').Router();
const moveRover = require('../../application/use_cases/moveRover');

router.get('/getfinalCoordinates', (req, res) => {
  const { startingPosition } = req.query;
  const { moveInstructions } = req.query;
  const moveInstructionArray = moveInstructions.split('');
  const startingPositionArray = startingPosition.split('');
  const finalCoordinates = moveRover(startingPositionArray, moveInstructionArray);

  res.json(
    `You're final Direction is ${finalCoordinates.currentDir} and you're final position is ${finalCoordinates.currentX},${finalCoordinates.currentY}`,
  );
});

module.exports = router;

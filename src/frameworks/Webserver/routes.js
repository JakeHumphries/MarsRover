const router = require('express').Router();
const dropRover = require('../../application/use_cases/dropRover');
const clearRovers = require('../../application/use_cases/clearRovers');
const moveRover = require('../../application/use_cases/moveRover');
const showRovers = require('../../application/use_cases/showRovers');
const updateGrid = require('../../application/use_cases/updateGrid');

router.get('/createRover', (req, res) => {
  const roverID = parseInt(req.query.roverID, 10);
  const { startingX } = req.query;
  const { startingY } = req.query;
  const { startingDir } = req.query;
  dropRover(roverID, startingX, startingY, startingDir);
  res.json(`Succesfully dropped rover ${roverID} at position ${startingX},${startingY},${startingDir} this is a massive change 1000`);
});

router.get('/clearRovers', (req, res) => {
  clearRovers();
  res.json('Succesfully cleared rovers from grid');
});

router.get('/moveRover', (req, res) => {
  const roverId = parseInt(req.query.roverID, 10);
  const { moveInstructions } = req.query;
  const rover = moveRover(roverId, moveInstructions);
  res.json(`Succesfully moved rover ${roverId} to position ${rover.currentX},${rover.currentY}`);
});

router.get('/showRovers', (req, res) => {
  const rovers = showRovers();
  res.json(rovers);
});

router.get('/updateGrid', (req, res) => {
  const { gridX } = req.query;
  const { gridY } = req.query;
  updateGrid(gridX, gridY);
  res.json(`the grid has been updated to ${gridX}, ${gridY}`);
});

module.exports = router;

const router = require('express').Router();
const dropRover = require('../../application/use_cases/dropRover');
const clearRovers = require('../../application/use_cases/clearRovers');

global.globalobject = [];

router.get('/createRover', (req, res) => {
  const { roverID } = req.query;
  const { startingX } = req.query;
  const { startingY } = req.query;
  const { startingDir } = req.query;
  dropRover(roverID, startingX, startingY, startingDir);
  res.json(`Succesfully dropped rover ${roverID} at position ${startingX},${startingY},${startingDir}`);
});

router.get('/clearRovers', (req, res) => {
  clearRovers();
  res.json('Succesfully cleared rovers from grid');
});

module.exports = router;

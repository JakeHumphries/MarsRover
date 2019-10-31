const router = require('express').Router();
const dropRover = require('../../application/use_cases/dropRover');

global.globalobject = [];

router.get('/createRover', (req, res) => {
  const { roverID } = req.query;
  const { startingX } = req.query;
  const { startingY } = req.query;
  const { startingDir } = req.query;
  dropRover(roverID, startingX, startingY, startingDir);
});

module.exports = router;

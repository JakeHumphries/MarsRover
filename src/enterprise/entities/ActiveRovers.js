let activeRovers = [];

const ActiveRovers = {
  addRover: rover => activeRovers.push(rover),
  getRovers: () => activeRovers,
  getRoverById: roverID => {
    const currentRover = activeRovers.find(activeRoversArr => activeRoversArr.id === roverID);
    return currentRover;
  },
  removeRovers: () => {
    activeRovers = [];
  },
  updateRover: rover => {
    const index = activeRovers.findIndex(activeRoversArr => activeRoversArr.id === rover.id);
    activeRovers[index] = rover;
  },
};

Object.freeze(ActiveRovers);

module.exports = ActiveRovers;

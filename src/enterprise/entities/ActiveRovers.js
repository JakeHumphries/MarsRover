let activeRovers = [];

const ActiveRovers = {
  add: rover => activeRovers.push(rover),
  getRovers: () => activeRovers,
  removeRovers: () => {
    activeRovers = [];
  },
};

Object.freeze(ActiveRovers);

module.exports = ActiveRovers;

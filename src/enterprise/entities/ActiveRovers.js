const activeRovers = [];

const ActiveRovers = {
  add: rover => activeRovers.push(rover),
  getRovers: () => activeRovers,
};

Object.freeze(ActiveRovers);

module.exports = ActiveRovers;

class ActiveRovers {
  constructor() {
    if (ActiveRovers.instance) {
      return ActiveRovers.instance;
    }

    ActiveRovers.instance = this;
    this.arr = [];
    this.currentRover = {};
    this.index = 0;

    return this;
  }

  getRoverById(roverID) {
    this.currentRover = this.arr.find(activeRoversArr => activeRoversArr.id === roverID);
    return this.currentRover;
  }

  updateRover(rover) {
    this.index = this.arr.findIndex(activeRoversArr => activeRoversArr.id === rover.id);
    this.arr[this.index] = rover;
  }
}

module.exports = ActiveRovers;

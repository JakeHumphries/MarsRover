module.exports = class Rover {
  constructor(name, startingX, startingY, startingDir, movementInstruction) {
    this.name = name;
    this.startingX = startingX;
    this.startingY = startingY;
    this.startingDir = startingDir;
    this.movementInstruction = movementInstruction;
  }
};

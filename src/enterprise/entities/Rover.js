module.exports = class {
  constructor(id, currentX, currentY, currentDir) {
    this.id = parseInt(id, 10);
    this.currentX = parseInt(currentX, 10);
    this.currentY = parseInt(currentY, 10);
    this.currentDir = currentDir;
  }
};

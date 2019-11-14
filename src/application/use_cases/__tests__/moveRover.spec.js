const moveRover = require('../moveRover');
const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../enterprise/entities/Rover');
const validate = require('../utils/validate');

const activeRovers = new ActiveRovers();

describe('moveRover', () => {
  activeRovers.updateRover = jest.fn();
  validate.checkMoveRover = jest.fn();
  validate.checkMoveInstructions = jest.fn();
  activeRovers.arr.push(new Rover(100, 1, 2, 'N'));
  it('should return the correct rover object after moving', () => {
    const expectedRover = { id: 10, currentX: 3, currentY: 2, currentDir: 'S' };
    activeRovers.arr.push(new Rover(10, 1, 2, 'N'));
    const rover = moveRover(10, 'RMMR');
    expect(rover).toMatchObject(expectedRover);
  });
  it('should call checkMoveRover', () => {
    moveRover(100, 'ML');
    expect(validate.checkMoveRover).toHaveBeenCalled();
  });
  it('should call checkMoveInstructions', () => {
    moveRover(100, 'ML');
    expect(validate.checkMoveInstructions).toHaveBeenCalled();
  });
  it('should call update rover', () => {
    moveRover(100, 'ML');
    expect(activeRovers.updateRover).toHaveBeenCalled();
  });
});

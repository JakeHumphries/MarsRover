const moveRover = require('../moveRover');
const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../enterprise/entities/Rover');

const activeRovers = new ActiveRovers();

describe('moveRover', () => {
  activeRovers.updateRover = jest.fn();
  it('should error if rover doesnt exist in the array', () => {
    try {
      moveRover(1, '');
    } catch (e) {
      expect(e.message).toBe('roverID 1 doesnt exist');
    }
  });
  it('should return the correct rover object after moving', () => {
    const expectedRover = { id: 10, currentX: 3, currentY: 2, currentDir: 'S' };
    activeRovers.arr.push(new Rover(10, 1, 2, 'N'));
    const rover = moveRover(10, 'RMMR');
    expect(rover).toMatchObject(expectedRover);
  });
  it('should call update rover', () => {
    moveRover(10, '');
    expect(activeRovers.updateRover).toHaveBeenCalled();
  });
});

const ActiveRovers = require('../ActiveRovers');
const Rover = require('../Rover');

const activeRovers = new ActiveRovers();

describe('ActiveRovers getRoverById', () => {
  it('should return the correct rover', () => {
    activeRovers.arr.push(new Rover(40, 1, 2, 'N'));
    const expectedRover = { id: 40, currentX: 1, currentY: 2, currentDir: 'N' };
    const rover = activeRovers.getRoverById(40);
    expect(rover).toMatchObject(expectedRover);
  });
});
describe('ActiveRovers updateRover', () => {
  it('should update the correct rover', () => {
    const expectedRover = { id: 50, currentX: 5, currentY: 2, currentDir: 'E' };
    const rover = new Rover(50, 5, 2, 'E');
    activeRovers.arr.push(new Rover(50, 1, 2, 'N'));
    activeRovers.updateRover(rover);
    const updatedRover = activeRovers.getRoverById(50);
    expect(updatedRover).toMatchObject(expectedRover);
  });
});

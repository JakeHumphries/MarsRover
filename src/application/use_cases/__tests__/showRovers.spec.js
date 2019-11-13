const showRovers = require('../showRovers');
const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../enterprise/entities/Rover');

const activeRovers = new ActiveRovers();

describe('moveRover', () => {
  it('Should error if there are no rovers on the grid', () => {
    try {
      showRovers();
    } catch (e) {
      expect(e.message).toBe('No rovers on the grid');
    }
  });
  it('Should return the rovers array', () => {
    const expectedArr = [{ id: 8, currentX: 1, currentY: 2, currentDir: 'N' }];
    activeRovers.arr.push(new Rover(8, 1, 2, 'N'));
    const arr = showRovers();
    expect(arr).toEqual(expectedArr);
  });
});

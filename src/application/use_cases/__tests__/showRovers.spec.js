const showRovers = require('../showRovers');
const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../enterprise/entities/Rover');
const validate = require('../utils/validate');

const activeRovers = new ActiveRovers();

describe('moveRover', () => {
  validate.checkRoversOnGrid = jest.fn();
  it('Should return the rovers array', () => {
    const expectedArr = [{ id: 8, currentX: 1, currentY: 2, currentDir: 'N' }];
    activeRovers.arr.push(new Rover(8, 1, 2, 'N'));
    const arr = showRovers();
    expect(arr).toEqual(expectedArr);
  });
  it('should call checkRoversOnGrid', () => {
    showRovers();
    expect(validate.checkRoversOnGrid).toHaveBeenCalled();
  });
});

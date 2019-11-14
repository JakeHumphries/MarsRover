const updateGrid = require('../updateGrid');
const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../enterprise/entities/Rover');
const grid = require('../../../enterprise/entities/grid');
const validate = require('../utils/validate');

const activeRovers = new ActiveRovers();

describe('updateGrid', () => {
  validate.checkGridCoordinates = jest.fn();
  it('Should set the activeRovers arr to be empty', () => {
    activeRovers.arr.push(new Rover(18, 1, 2, 'N'));
    updateGrid('3', '3');
    expect(activeRovers.arr).toEqual([]);
  });
  it('Should set the grid co ordinates to be what has been passed', () => {
    const expectedGrid = { gridX: 3, gridY: 3 };
    updateGrid('3', '3');
    expect(grid).toEqual(expectedGrid);
  });
  it('should call checkGridCoordinates', () => {
    updateGrid('1', '1');
    expect(validate.checkGridCoordinates).toHaveBeenCalled();
  });
});

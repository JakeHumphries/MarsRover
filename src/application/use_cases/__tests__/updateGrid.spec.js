const updateGrid = require('../updateGrid');
const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../enterprise/entities/Rover');
const grid = require('../../../enterprise/entities/grid');

const activeRovers = new ActiveRovers();

describe('updateGrid', () => {
  it('Should error if grid coordinate X is not a integer', () => {
    try {
      updateGrid('notInt', '2');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates are not integers');
    }
  });
  it('Should error if grid coordinate Y is not a integer', () => {
    try {
      updateGrid('1', 'notInt');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates are not integers');
    }
  });
  it('Should error if grid coordinate X is a minus number', () => {
    try {
      updateGrid('-10', '2');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates cannot be minus');
    }
  });
  it('Should error if grid coordinate Y is a minus number', () => {
    try {
      updateGrid('10', '-10');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates cannot be minus');
    }
  });
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
});

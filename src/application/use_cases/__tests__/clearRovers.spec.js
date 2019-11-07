const clearRovers = require('../clearRovers');
const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../enterprise/entities/Rover');

const activeRovers = new ActiveRovers();

describe('clearRovers', () => {
  it('Should set the activeRovers arr to be empty', () => {
    activeRovers.arr.push(new Rover(21, 1, 2, 'N'));
    clearRovers();
    expect(activeRovers.arr).toEqual([]);
  });
});

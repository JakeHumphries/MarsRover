const clearRovers = require('../clearRovers');
const ActiveRovers = require('../../../enterprise/entities/ActiveRovers');

jest.mock('../../../enterprise/entities/ActiveRovers');

describe('clearRovers', () => {
  ActiveRovers.removeRovers = jest.fn();
  it('Should call clearRover method', () => {
    clearRovers();
    expect(ActiveRovers.removeRovers).toBeCalled();
  });
});

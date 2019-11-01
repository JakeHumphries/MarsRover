const validate = require('../validate');
const ActiveRovers = require('../../../../enterprise/entities/ActiveRovers');
jest.mock('../../../../enterprise/entities/ActiveRovers');

describe('checkRoverDetails', () => {
  beforeEach(() => {
    ActiveRovers.getRovers.mockClear();
  });
  it('should error if the X input co ordinate is not an integer', () => {
    try {
      validate.checkRoverDetails(1, 'N', 2, {});
    } catch (e) {
      expect(e.message).toBe('Rover starting co ordinates are not integers');
    }
  });
  it('should error if the Y input co ordinate is not an integer', () => {
    try {
      validate.checkRoverDetails(1, 1, 'N', {});
    } catch (e) {
      expect(e.message).toBe('Rover starting co ordinates are not integers');
    }
  });
  it('should error if the X input co ordinate is not within the grid', () => {
    const testGrid = { x: 5, y: 5 };
    try {
      validate.checkRoverDetails(1, 6, 1, testGrid);
    } catch (e) {
      expect(e.message).toBe('Rover would be outside the bounds of the grid');
    }
  });
  it('should error if the Y input co ordinate is not within the grid', () => {
    const testGrid = { x: 5, y: 5 };
    try {
      validate.checkRoverDetails(1, 1, 6, testGrid);
    } catch (e) {
      expect(e.message).toBe('Rover would be outside the bounds of the grid');
    }
  });
  it('should error if the input RoverId already exists', () => {
    ActiveRovers.getRovers = jest.fn(() => [{ id: 3 }]);
    try {
      validate.checkRoverDetails(3, 1, 1, {});
    } catch (e) {
      expect(e.message).toBe('RoverID already exists');
    }
  });
  it('should error if the input starting co ordinates already have a rover on them', () => {});
});

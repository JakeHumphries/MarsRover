const dropRover = require('../dropRover');
const validate = require('../utils/validate');
const grid = require('../../../enterprise/entities/grid');

describe('dropRover', () => {
  validate.checkRoverDetails = jest.fn();
  it('should call checkRoverDetails', () => {
    dropRover();
    expect(validate.checkRoverDetails).toHaveBeenCalled();
  });
  it('should call checkRoverDetails with the correct parameters', () => {
    dropRover(1, 2, 3, 'N');
    expect(validate.checkRoverDetails).toHaveBeenCalledWith(1, 2, 3, grid);
  });
});

const dropRover = require('../dropRover');
const validate = require('../utils/validate');

describe('dropRover', () => {
  validate.checkRoverDetails = jest.fn();
  it('Should call checkRoverDetails', () => {
    dropRover();
    expect(validate.checkRoverDetails).toBeCalled();
  });
});

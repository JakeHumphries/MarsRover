const validate = require('../validate');
const ActiveRovers = require('../../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../../enterprise/entities/Rover');

const activeRovers = new ActiveRovers();

describe('checkRoverDetails', () => {
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
    activeRovers.arr.push(new Rover(26, 1, 2, 'N'));
    try {
      validate.checkRoverDetails(26, 1, 1, {});
    } catch (e) {
      expect(e.message).toBe('RoverID already exists');
    }
  });
  it('should error if the input starting co ordinates already have a rover on them', () => {
    activeRovers.arr.push(new Rover(25, 1, 2, 'N'));
    try {
      validate.checkRoverDetails(29, 1, 2, {});
    } catch (e) {
      expect(e.message).toBe('Rover already exists on starting position');
    }
  });
});

describe('checkRoute', () => {
  it('should error if the rover would leave the grid', () => {
    try {
      validate.checkRoute(10, 10, { gridX: 1, gridY: 1 });
    } catch (e) {
      expect(e.message).toBe('Rover would leave grid! enter new move instructions');
    }
  });
  it('should error if their is an obstacle on the route for the rover', () => {
    activeRovers.arr.push(new Rover(30, 1, 2, 'N'));
    try {
      validate.checkRoute(1, 2, { gridX: 5, gridY: 5 });
    } catch (e) {
      expect(e.message).toBe('Rover already exists on the route at position 1,2');
    }
  });
});

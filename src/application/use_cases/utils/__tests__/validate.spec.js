const validate = require('../validate');
const ActiveRovers = require('../../../../enterprise/entities/ActiveRovers');
const Rover = require('../../../../enterprise/entities/Rover');

const activeRovers = new ActiveRovers();

describe('checkRoverDetails', () => {
  it('should error if the X input co ordinate is a decimal', () => {
    try {
      validate.checkRoverDetails(1, '1.2', '2', {});
    } catch (e) {
      expect(e.message).toBe('Rover starting co ordinates are not integers');
    }
  });
  it('should error if the Y input co ordinate is a decimal', () => {
    try {
      validate.checkRoverDetails(1, '1', '1.2', {});
    } catch (e) {
      expect(e.message).toBe('Rover starting co ordinates are not integers');
    }
  });
  it('should error if the X input co ordinate is not an integer', () => {
    try {
      validate.checkRoverDetails(1, 'N', '2', {});
    } catch (e) {
      expect(e.message).toBe('Rover starting co ordinates are not integers');
    }
  });
  it('should error if the Y input co ordinate is not an integer', () => {
    try {
      validate.checkRoverDetails(1, '1', 'N', {});
    } catch (e) {
      expect(e.message).toBe('Rover starting co ordinates are not integers');
    }
  });
  it('should error if the X input co ordinate is not within the grid', () => {
    const testGrid = { x: '5', y: '5' };
    try {
      validate.checkRoverDetails(1, '6', '1', testGrid);
    } catch (e) {
      expect(e.message).toBe('Rover would be outside the bounds of the grid');
    }
  });
  it('should error if the X input co ordinate would result in a minus number', () => {
    const testGrid = { x: '5', y: '5' };
    try {
      validate.checkRoverDetails(1, '-1', '1', testGrid);
    } catch (e) {
      expect(e.message).toBe('Rover would be outside the bounds of the grid');
    }
  });
  it('should error if the Y input co ordinate is not within the grid', () => {
    const testGrid = { x: '5', y: '5' };
    try {
      validate.checkRoverDetails(1, '1', '6', testGrid);
    } catch (e) {
      expect(e.message).toBe('Rover would be outside the bounds of the grid');
    }
  });
  it('should error if the Y input co ordinate would result in a minus number', () => {
    const testGrid = { x: '5', y: '5' };
    try {
      validate.checkRoverDetails(1, '1', '-1', testGrid);
    } catch (e) {
      expect(e.message).toBe('Rover would be outside the bounds of the grid');
    }
  });
  it('should error if the input RoverId already exists', () => {
    activeRovers.arr.push(new Rover(26, '1', '2', 'N'));
    try {
      validate.checkRoverDetails(26, '1', '1', {});
    } catch (e) {
      expect(e.message).toBe('RoverID already exists');
    }
  });
  it('should error if the input starting co ordinates already have a rover on them', () => {
    activeRovers.arr.push(new Rover(25, '1', '2', 'N'));
    try {
      validate.checkRoverDetails(29, '1', '2', {});
    } catch (e) {
      expect(e.message).toBe('Rover already exists on starting position');
    }
  });
});

describe('checkRoute', () => {
  it('should error if the rover would leave the grid', () => {
    try {
      validate.checkRoute(10, 10, { gridX: '1', gridY: '1' });
    } catch (e) {
      expect(e.message).toBe('Rover would leave grid! enter new move instructions');
    }
  });
  it('should error if the rovers new co ordinates are minus numbers', () => {
    try {
      validate.checkRoute(10, 10, { gridX: '-1', gridY: '1' });
    } catch (e) {
      expect(e.message).toBe('Rover would leave grid! enter new move instructions');
    }
  });
  it('should error if their is an obstacle on the route for the rover', () => {
    activeRovers.arr.push(new Rover(30, 1, 2, 'N'));
    try {
      validate.checkRoute(1, 2, { gridX: '5', gridY: '5' });
    } catch (e) {
      expect(e.message).toBe('Rover already exists on the route at position 1,2');
    }
  });
});

describe('checkMoveRover', () => {
  it('should error if rover doesnt exist in the array', () => {
    try {
      validate.checkMoveRover(1);
    } catch (e) {
      expect(e.message).toBe('roverID 1 doesnt exist');
    }
  });
});

describe('checkMoveInstructions', () => {
  it('should error if rover move instructions are empty', () => {
    try {
      validate.checkMoveInstructions([], 1);
    } catch (e) {
      expect(e.message).toBe('Move instructions are incorrect');
    }
  });
  it('should error if rover move instructions are a number', () => {
    try {
      validate.checkMoveInstructions([1], 0);
    } catch (e) {
      expect(e.message).toBe('Move instructions are incorrect');
    }
  });
  it('should error if rover move instructions are not M L or R', () => {
    try {
      validate.checkMoveInstructions(['P'], 0);
    } catch (e) {
      expect(e.message).toBe('Move instruction must be L R or M');
    }
  });
});

describe('checkRoversOnGrid', () => {
  it('Should error if there are no rovers on the grid', () => {
    try {
      validate.checkRoversOnGrid();
    } catch (e) {
      expect(e.message).toBe('No rovers on the grid');
    }
  });
});

describe('checkGridCoordinates', () => {
  it('Should error if grid coordinate X is not a integer', () => {
    try {
      validate.checkGridCoordinates('notInt', '2');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates are not integers');
    }
  });
  it('Should error if grid coordinate Y is not a integer', () => {
    try {
      validate.checkGridCoordinates('1', 'notInt');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates are not integers');
    }
  });
  it('Should error if grid coordinate X is a minus number', () => {
    try {
      validate.checkGridCoordinates('-10', '2');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates cannot be minus');
    }
  });
  it('Should error if grid coordinate Y is a minus number', () => {
    try {
      validate.checkGridCoordinates('10', '-10');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates cannot be minus');
    }
  });
  it('Should error if grid coordinate X is a decimal number', () => {
    try {
      validate.checkGridCoordinates('10.2', '2');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates are not integers');
    }
  });
  it('Should error if grid coordinate Y is a decimal number', () => {
    try {
      validate.checkGridCoordinates('10', '10.2');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates are not integers');
    }
  });
});


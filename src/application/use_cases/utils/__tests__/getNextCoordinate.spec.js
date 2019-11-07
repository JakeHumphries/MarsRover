const getNextCoordinate = require('../getNextCoordinate');

describe('getNextCoordinate', () => {
  const obj = { id: 1, currentX: 1, currentY: 1, currentDir: 'N' };
  it('Should return the correct object if current Dir is N', () => {
    const expectedObj = { id: 1, currentX: 1, currentY: 2, currentDir: 'N' }
    const updatedObj = getNextCoordinate(obj);
    expect(updatedObj).toMatchObject(expectedObj);
  });
  it('Should return the correct object if current Dir is E', () => {
    obj.currentDir = 'E';
    const expectedObj = { id: 1, currentX: 2, currentY: 1, currentDir: 'E' };
    const updatedObj = getNextCoordinate(obj);
    expect(updatedObj).toMatchObject(expectedObj);
  });
  it('Should return the correct object if current Dir is S', () => {
    obj.currentDir = 'S';
    const expectedObj = { id: 1, currentX: 1, currentY: 0, currentDir: 'S' };
    const updatedObj = getNextCoordinate(obj);
    expect(updatedObj).toMatchObject(expectedObj);
  });
  it('Should return the correct object if current Dir is W', () => {
    obj.currentDir = 'W';
    const expectedObj = { id: 1, currentX: 0, currentY: 1, currentDir: 'W' };
    const updatedObj = getNextCoordinate(obj);
    expect(updatedObj).toMatchObject(expectedObj);
  });
  it('Should error if the currentDir is incorrect', () => {
    obj.currentDir = 'North';
    try {
      getNextCoordinate(obj);
    } catch (e) {
      expect(e.message).toBe('current direction is incorrect');
    }
  });
});

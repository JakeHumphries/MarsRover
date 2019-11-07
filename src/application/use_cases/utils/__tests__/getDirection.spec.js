const getDirection = require('../getDirection');

describe('getDirection', () => {
  it('Should return W if currDir is N and rotation is L', () => {
    const direction = getDirection('N', 'L');
    expect(direction).toBe('W');
  });
  it('Should return E if currDir is N and rotation is R', () => {
    const direction = getDirection('N', 'R');
    expect(direction).toBe('E');
  });
  it('Should return N if currDir is E and rotation is L', () => {
    const direction = getDirection('E', 'L');
    expect(direction).toBe('N');
  });
  it('Should return S if currDir is E and rotation is R', () => {
    const direction = getDirection('E', 'R');
    expect(direction).toBe('S');
  });
  it('Should return E if currDir is S and rotation is L', () => {
    const direction = getDirection('S', 'L');
    expect(direction).toBe('E');
  });
  it('Should return W if currDir is S and rotation is R', () => {
    const direction = getDirection('S', 'R');
    expect(direction).toBe('W');
  });
  it('Should return S if currDir is W and rotation is L', () => {
    const direction = getDirection('W', 'L');
    expect(direction).toBe('S');
  });
  it('Should return N if currDir is W and rotation is R', () => {
    const direction = getDirection('W', 'R');
    expect(direction).toBe('N');
  });
  it('Should error if the direction is not correct', () => {
    try {
      getDirection('West', 'L');
    } catch (e) {
      expect(e.message).toBe('Initial Direction or rotation is incorrect');
    }
  });
  it('Should error if the rotation is not correct', () => {
    try {
      getDirection('W', 'Left');
    } catch (e) {
      expect(e.message).toBe('Initial Direction or rotation is incorrect');
    }
  });
});

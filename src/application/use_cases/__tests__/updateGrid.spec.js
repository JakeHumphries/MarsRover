const updateGrid = require('../updateGrid');

describe('updateGrid', () => {
  it('Should error if grid coordinates are not integers', () => {
    try {
      updateGrid('notInt', '2');
    } catch (e) {
      expect(e.message).toBe('Grid coordinates are not integers');
    }
  });
});

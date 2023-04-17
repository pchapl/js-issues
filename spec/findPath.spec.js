const findPath = require('../findPath.js');

describe('findPath', function () {
  it('should return the correct value for the degenerate case', function () {
    expect(findPath(1, 1)).toEqual([]);
    expect(findPath(1, 0)).toBeFalsy();
  });
  it('should return the correct value for simple cases', function () {
    expect(findPath([1, 2], 1)).toEqual([0]);
    expect(findPath([1, 2], 2)).toEqual([1]);
  });
  it('should return the correct value for the deep case', function () {
    expect(findPath([1, [2, [3, [4, 5]]]], 5)).toEqual([1, 1, 1, 1]);
  });
  it('should return the correct value for complicated cases', function () {
    expect(findPath([1, [2, [[3], 7, [4, 5]], 8]], 4)).toEqual([1, 1, 2, 0]);
    expect(findPath([1, [2, [[3], 7, [4, 5]], 8]], 3)).toEqual([1, 1, 0, 0]);
  });
  it('should return the correct value for negative case', function () {
    expect(findPath([1, [2, [3, [4, 5]]]], 6)).toBeFalsy();
  });
});

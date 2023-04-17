const findDepth = require('../findDepth.js');

describe('findDepth', function () {
  it('should return the correct value for the degenerate case', function () {
    expect(findDepth(1, 1)).toBe(0);
    expect(findDepth(1, 0)).toBe(-1);
  });
  it('should return the correct value for the simple case', function () {
    expect(findDepth([1, 2], 2)).toBe(1);
  });
  it('should return the correct value for the first case', function () {
    expect(findDepth([1, [2, [3, [4, 5]]]], 5)).toBe(4);
  });
  it('should return the correct value for the second case', function () {
    expect(findDepth([1, [2, [3, [4, 5]]]], 3)).toBe(3);
  });
  it('should return the correct value for the third case', function () {
    expect(findDepth([1, [2, [3, [4, 5]], 8]], 8)).toBe(2);
  });
  it('should return the correct value for the fourth case', function () {
    expect(findDepth([1, [2, [[3], 7, [4, 5]], 8]], 7)).toBe(3);
  });
  it('should return the correct value for the fifth case', function () {
    expect(findDepth([1, [2, [[3], 7, [4, 5]], 8]], 9)).toBe(-1);
  });
  it('should return the correct value regardless of type', function () {
    expect(findDepth(['a', ['b', ['c', ['d', 'e']]]], 'c')).toBe(3);
  });
  it('should return the correct value when subject is an array itself', function () {
    const needle = ['d', ['e']];
    expect(findDepth(['a', ['b', ['c', needle]]], needle)).toBe(3);
  });
  it('should return the correct value when subject is object', function () {
    const a = {};
    const b = {};
    expect(findDepth([a, [b]], a)).toBe(1);
    expect(findDepth([a, [b]], b)).toBe(2);
    expect(findDepth([a, [b]], {})).toBe(-1);
  });
});

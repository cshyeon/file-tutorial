const Test = require('../../../src');

describe('test1', () => {
  it('test1 it', () => {
    const test = new Test();
    expect(test.abc()).toBe('test abc');
  });
});

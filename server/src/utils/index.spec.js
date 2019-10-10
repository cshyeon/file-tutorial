const { getExtension } = require('./');

describe('getExtension() := 확장자 얻어오기', () => {
  it('Correct test set', () => {
    const testSet = ['abc.png', 'kbg.sub.jpeg', '.gif'];
    const testAnswerSet = ['.png', '.jpeg', '.gif'];

    testSet.forEach((testCase, index) => {
      const result = getExtension(testCase);
      expect(result).toBe(testAnswerSet[index]);
    });
  });
});

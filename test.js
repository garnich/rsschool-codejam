const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');

describe('sumOfOthers', () => {
  it('1', () => {
    const count = sumOfOther([2, 3, 1]);
    assert.equal(JSON.stringify(count), JSON.stringify([4,3,5]));
  });

  it('2', () => {
    const count = sumOfOther([2, 3, 1, 5, 6, 4]);
    assert.equal(JSON.stringify(count), JSON.stringify([19,18,20,16,15,17]));
  });  

  it('3', () => {
    const count = sumOfOther([98475,4957495,8326283,32453,2,1,94508636]);
    assert.equal(JSON.stringify(count), JSON.stringify([ 107824870,102965850,99597062,107890892,107923343,107923344,13414709]));
  });

  it('4', () => {
    const count = sumOfOther([777,444,333,888,999,111,222,555,666]);
    assert.equal(JSON.stringify(count), JSON.stringify([4218,4551,4662,4107,3996,4884,4773,4440,4329]));
  });

});


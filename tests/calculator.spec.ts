import calcFunctions from './calculator';
const { sum, subtraction } = calcFunctions;
import {describe, test, expect} from 'vitest';

describe('Calculator tests', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test('subtraction 3 - 2 to equal 1', () => {
    expect(subtraction(3, 2)).toEqual(1);
  });
});


// const currencyToInt = require('./currencyToInt');

import currencyToInt from './currencyToInt';

describe('test currencyToInt()', () => {
  it('converts $1.00', () => {
    expect(currencyToInt('$1.00')).toBe(1);
  });
  it('converts $1', () => {
    expect(currencyToInt('$1')).toBe(1);
  });
  it('converts $0.00', () => {
    expect(currencyToInt('$0.00')).toBe(0);
  });
  it('converts $0', () => {
    expect(currencyToInt('$0')).toBe(0);
  });
  it('converts $1,000.00', () => {
    expect(currencyToInt('$1,000.00')).toBe(1000);
  });
  it('converts $1,000', () => {
    expect(currencyToInt('$1,000')).toBe(1000);
  });
});

// const currencyToInt = require('./currencyToInt');

import currencyToInt from './currencyToInt';

describe('test currencyToInt()', () => {
  it('convert $1.00', () => {
    expect(currencyToInt('$1.00')).toBe(1);
  });
  it('convert $1', () => {
    expect(currencyToInt('$1')).toBe(1);
  });
  it('convert $0.00', () => {
    expect(currencyToInt('$0.00')).toBe(0);
  });
  it('convert $1,000.00', () => {
    expect(currencyToInt('$1,000.00')).toBe(1000);
  });
  it('convert $1,000', () => {
    expect(currencyToInt('$1,000')).toBe(1000);
  });
});

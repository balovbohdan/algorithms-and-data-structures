import validateBrackets from '.';

describe('validateBrackets()', () => {
  it('should return boolean value', () => {
    const valid = validateBrackets('[()]');

    expect(typeof valid).toBe('boolean');
  });

  it('should return true if brackets sequence is valid', () => {
    const valid = validateBrackets('[()<[]>{}[{<>}]]');

    expect(valid).toBe(true);
  });

  it('should return false if brackets sequence is not valid', () => {
    const valid = validateBrackets('{[]<(])>{}}');

    expect(valid).toBe(false);
  });

  it('should throw if brackets sequence contains invalid element', () => {
    const test = () => validateBrackets('[{}<!>]');

    expect(test).toThrow(Error);
  });
});

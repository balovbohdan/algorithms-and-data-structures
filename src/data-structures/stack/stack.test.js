import Stack from '.';

describe('Stack', () => {
  describe('length', () => {
    it('should be a number', () => {
      const stack = new Stack();

      expect(typeof stack.length).toBe('number');
    });

    it('should be 0 after initialization', () => {
      const stack = new Stack();

      expect(stack.length).toBe(0);
    });
  });

  describe('isEmpty', () => {
    it('should return "true" if there are no value in a stack', () => {
      const stack = new Stack();

      expect(stack.isEmpty).toBe(true);
    });

    it('should return "false" if there are values in a stack', () => {
      const stack = new Stack();

      stack.push('value');

      expect(stack.isEmpty).toBe(false);
    });
  });

  describe('push()', () => {
    it('should increase length', () => {
      const stack = new Stack();

      stack.push('value');

      expect(stack.length).toBe(1);
    });
  });

  describe('pop()', () => {
    it('should decrease length', () => {
      const stack = new Stack();

      stack.push('value1');
      stack.push('value2');

      stack.pop();

      expect(stack.length).toBe(1);
    });

    it('should return value', () => {
      const stack = new Stack();
      const value1 = 'value1';
      const value2 = 'value2';

      stack.push(value1);
      stack.push(value2);

      const poppedValue1 = stack.pop();
      const poppedValue2 = stack.pop();

      expect(poppedValue1).toBe(value2);
      expect(poppedValue2).toBe(value1);
    });

    it('should return null if stack is empty', () => {
      const stack = new Stack();
      const poppedValue = stack.pop();

      expect(poppedValue).toBeNull();
    });

    it('should not decrease length if stack is empty', () => {
      const stack = new Stack();

      stack.pop();

      expect(stack.length).toBe(0);
    });
  });
});

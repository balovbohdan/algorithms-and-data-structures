import LinkedList from '.';

describe('LinkedList', () => {
  describe('length', () => {
    it('should be a number', () => {
      const linkedList = new LinkedList();

      expect(typeof linkedList.length).toBe('number');
    });

    it('should be 0 after initialization', () => {
      const linkedList = new LinkedList();

      expect(linkedList.length).toBe(0);
    });
  });

  describe('set()', () => {
    it('should increase length', () => {
      const linkedList = new LinkedList();

      linkedList.set('value1', 0);
      linkedList.set('value3', 1);
      linkedList.set('value2', 1);

      expect(linkedList.length).toBe(3);
    });

    it('shoud reuturn set value', () => {
      const linkedList = new LinkedList();
      const value = 'value';

      linkedList.set(value, 0);

      expect(linkedList.get(0)).toBe(value);
    });

    it('should set value at index', () => {
      const linkedList = new LinkedList();
      const value1 = 'value1';
      const value2 = 'value2';
      const value3 = 'value3';

      linkedList.set(value1, 0);
      linkedList.set(value3, 1);
      linkedList.set(value2, 1);

      expect(linkedList.get(0)).toBe(value1);
      expect(linkedList.get(1)).toBe(value2);
      expect(linkedList.get(2)).toBe(value3);
    });

    it('should set head if index is not specified', () => {
      const linkedList = new LinkedList();
      const value1 = 'value1';
      const value2 = 'value2';

      linkedList.push(value1);
      linkedList.set(value2);

      expect(linkedList.get(0)).toBe(value2);
    });

    it('should set head if index < 0', () => {
      const linkedList = new LinkedList();
      const value1 = 'value1';
      const value2 = 'value2';

      linkedList.push(value1);
      linkedList.set(value2, -1);

      expect(linkedList.get(0)).toBe(value2);
    });

    it('should set tail if index is out of bounds', () => {
      const linkedList = new LinkedList();
      const value1 = 'value1';
      const value2 = 'value2';

      linkedList.push(value1);
      linkedList.set(value2, 5);

      expect(linkedList.get(linkedList.length - 1)).toBe(value2);
    });
  });

  describe('delete()', () => {
    it('should decrease length', () => {
      const linkedList = new LinkedList();

      linkedList.push('value1');
      linkedList.push('value2');
      linkedList.push('value3');

      linkedList.delete(0);
      linkedList.delete(1);

      expect(linkedList.length).toBe(1);
    });

    it('should return deleted value', () => {
      const linkedList = new LinkedList();
      const value1 = 'value1';
      const value2 = 'value2';
      const value3 = 'value3';

      linkedList.push(value1);
      linkedList.push(value2);
      linkedList.push(value3);

      expect(linkedList.delete(0)).toBe(value1);
      expect(linkedList.delete(0)).toBe(value2);
      expect(linkedList.delete(0)).toBe(value3);
    });

    it('should return null if index is not specified', () => {
      const linkedList = new LinkedList();

      linkedList.push('value');

      expect(linkedList.delete()).toBeNull();
    });

    it('should return null is index < 0', () => {
      const linkedList = new LinkedList();

      linkedList.push('value');

      expect(linkedList.delete(-1)).toBeNull();
    });

    it('should return null if index is out of bounds', () => {
      const linkedList = new LinkedList();

      linkedList.push('value');

      expect(linkedList.delete(4)).toBeNull();
    });
  });

  describe('push()', () => {
    it('should increase length', () => {
      const linkedList = new LinkedList();

      linkedList.push('value1');
      linkedList.push('value2');

      expect(linkedList.length).toBe(2);
    });

    it('should return pushed value', () => {
      const linkedList = new LinkedList();
      const value = 'value';

      expect(linkedList.push(value)).toBe(value);
    });
  });

  describe('pop()', () => {
    it('should decrease length', () => {
      const linkedList = new LinkedList();

      linkedList.push('value1');
      linkedList.push('value2');

      linkedList.pop();

      expect(linkedList.length).toBe(1);
    });

    it('should return popped value', () => {
      const linkedList = new LinkedList();
      const value1 = 'value';
      const value2 = 'value2';

      linkedList.push(value1);
      linkedList.push(value2);

      expect(linkedList.pop()).toBe(value2);
    });

    it('should pop correctly when head and tail are equal', () => {
      const linkedList = new LinkedList();
      const value = 'value';

      linkedList.push(value);

      const poppedValue = linkedList.pop();

      expect(linkedList.length).toBe(0);
      expect(poppedValue).toBe(value);
    });
  });

  describe('unshift()', () => {
    it('should increase length', () => {
      const linkedList = new LinkedList();

      linkedList.unshift('value1');
      linkedList.unshift('value2');

      expect(linkedList.length).toBe(2);
    });

    it('should return unshifted value', () => {
      const linkedList = new LinkedList();
      const value = 'value';

      expect(linkedList.unshift(value)).toBe(value);
    });
  });

  describe('shift()', () => {
    it('should decrease length', () => {
      const linkedList = new LinkedList();

      linkedList.push('value1');
      linkedList.push('value2');

      linkedList.shift();

      expect(linkedList.length).toBe(1);
    });

    it('should return shifted value', () => {
      const linkedList = new LinkedList();
      const value1 = 'value';
      const value2 = 'value2';

      linkedList.push(value1);
      linkedList.push(value2);

      expect(linkedList.shift()).toBe(value1);
    });

    it('should shift value correctly when head and tail are equal', () => {
      const linkedList = new LinkedList();
      const value = 'value';

      linkedList.push(value);

      const shiftedValue = linkedList.shift();

      expect(linkedList.length).toBe(0);
      expect(shiftedValue).toBe(value);
    });
  });

  describe('get()', () => {
    it('should return value from index', () => {
      const linkedList = new LinkedList();
      const value1 = 'value1';
      const value2 = 'value2';
      const value3 = 'value3';

      linkedList.push(value1);
      linkedList.push(value2);
      linkedList.push(value3);

      expect(linkedList.get(0)).toBe(value1);
      expect(linkedList.get(1)).toBe(value2);
      expect(linkedList.get(2)).toBe(value3);
    });

    it('should return null if linked list is empty', () => {
      const linkedList = new LinkedList();

      expect(linkedList.get(0)).toBeNull();
      expect(linkedList.get(1)).toBeNull();
    });

    it('should return null if index is out of bounds', () => {
      const linkedList = new LinkedList();

      linkedList.push('value1');
      linkedList.push('value2');

      expect(linkedList.get(4)).toBeNull();
    });

    it('should return head\'s value if index is not specified', () => {
      const linkedList = new LinkedList();
      const value1 = 'value1';
      const value2 = 'value2';

      linkedList.push(value1);
      linkedList.push(value2);

      expect(linkedList.get()).toBe(value1);
    });

    it('should return head\'s value if index < 0', () => {
      const linkedList = new LinkedList();
      const value1 = 'value1';
      const value2 = 'value2';

      linkedList.push(value1);
      linkedList.push(value2);

      expect(linkedList.get(-1)).toBe(value1);
    });
  });

  describe('toString()', () => {
    it('should return string representation of linked list', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const linkedList = new LinkedList();
      const linkedListStringified = `LinkedList [ ${value1}, ${value2} ]`;

      linkedList.push(value1);
      linkedList.push(value2);

      expect(linkedList.toString()).toBe(linkedListStringified);
    });
  });
});

import DynamicArray from '.';

describe('DynamicArray', () => {
  describe('constructor()', () => {
    it('should throw if capacity < 0', () => {
      const test = () => { new DynamicArray(-1); };

      expect(test).toThrow(Error);
    });
  });

  describe('isEmpty', () => {
    it('should return "true" if there are no elements in an array', () => {
      const dynamicArray = new DynamicArray();

      expect(dynamicArray.isEmpty).toBe(true);
    });

    it('should return "false" if there are elements in an array', () => {
      const dynamicArray = new DynamicArray();

      dynamicArray.add('value');

      expect(dynamicArray.isEmpty).toBe(false);
    });
  });

  describe('length', () => {
    it('should be a number', () => {
      const dynamicArray = new DynamicArray();

      expect(typeof dynamicArray.length).toBe('number');
    });

    it('should be 0 after initialization', () => {
      const dynamicArray = new DynamicArray();

      expect(dynamicArray.length).toBe(0);
    });
  });

  describe('get()', () => {
    it('should return value by index', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const dynamicArray = new DynamicArray(2);

      dynamicArray.add(value1);
      dynamicArray.add(value2);

      expect(dynamicArray.get(0)).toBe(value1);
      expect(dynamicArray.get(1)).toBe(value2);
    });

    it('should throw if index is out of bounds', () => {
      const test = () => {
        const dynamicArray = new DynamicArray();

        dynamicArray.add('value');
        dynamicArray.get(1);
      };

      expect(test).toThrow(Error);
    });
  });

  describe('set()', () => {
    it('should set value by index', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const value3 = 'value3';
      const value4 = 'value4';
      const dynamicArray = new DynamicArray(2);

      dynamicArray.add(value1);
      dynamicArray.add(value2);

      dynamicArray.set(0, value3);
      dynamicArray.set(1, value4);

      expect(dynamicArray.get(0)).toBe(value3);
      expect(dynamicArray.get(1)).toBe(value4);
    });

    it('should throw if index is out of bounds', () => {
      const test = () => {
        const dynamicArray = new DynamicArray();

        dynamicArray.add('value1');
        dynamicArray.set(1, 'value2');
      };

      expect(test).toThrow(Error);
    });

    it('should throw if array is empty and index > 0', () => {
      const test = () => {
        const dynamicArray = new DynamicArray();

        dynamicArray.set(1, 'value');
      };

      expect(test).toThrow(Error);
    });

    it('should throw if array is empty and index = 0', () => {
      const test = () => {
        const dynamicArray = new DynamicArray();

        dynamicArray.set(0, 'value');
      };

      expect(test).toThrow(Error);
    });
  });

  describe('clear()', () => {
    it('should remove all elements from array', () => {
      const dynamicArray = new DynamicArray(2);

      dynamicArray.add('value1');
      dynamicArray.add('value2');

      dynamicArray.clear();

      expect(dynamicArray.isEmpty).toBe(true);
    });
  });

  describe('add()', () => {
    it('should add elements to the end of array', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const dynamicArray = new DynamicArray(2);

      dynamicArray.add(value1);
      dynamicArray.add(value2);

      expect(dynamicArray.get(0)).toBe(value1);
      expect(dynamicArray.get(1)).toBe(value2);
    });

    it('should increase length after adding element', () => {
      const dynamicArray = new DynamicArray();

      dynamicArray.add('value');

      expect(dynamicArray.length).toBe(1);
    });

    it('should increase capacity when it exceeds', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const value3 = 'value3';
      const dynamicArray = new DynamicArray(2);

      dynamicArray.add(value1);
      dynamicArray.add(value2);
      dynamicArray.add(value3);

      expect(dynamicArray.get(0)).toBe(value1);
      expect(dynamicArray.get(1)).toBe(value2);
      expect(dynamicArray.get(2)).toBe(value3);
    });
  });

  describe('contains()', () => {
    it('should return "true" if element in array', () => {
      const value = 'value';
      const dynamicArray = new DynamicArray();

      dynamicArray.add(value);

      expect(dynamicArray.contains(value)).toBe(true);
    });

    it('should return "false" if element is not in array', () => {
      const dynamicArray = new DynamicArray();

      dynamicArray.add('value1');

      expect(dynamicArray.contains('value2')).toBe(false);
    });
  });

  describe('removeByValue()', () => {
    it('should remove element by value', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const dynamicArray = new DynamicArray();

      dynamicArray.add(value1);
      dynamicArray.add(value2);

      dynamicArray.removeByValue(value1);

      expect(dynamicArray.length).toBe(1);
      expect(dynamicArray.get(0)).toBe(value2);
    });

    it('should decrease length after removing element', () => {
      const value = 'value';
      const dynamicArray = new DynamicArray();

      dynamicArray.add(value);
      dynamicArray.removeByValue(value);

      expect(dynamicArray.length).toBe(0);
    });
  });

  describe('removeByIndex()', () => {
    it('should remove element by index', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const dynamicArray = new DynamicArray();

      dynamicArray.add(value1);
      dynamicArray.add(value2);

      dynamicArray.removeByIndex(0);

      expect(dynamicArray.get(0)).toBe(value2);
    });

    it('should decrease length after element removing', () => {
      const dynamicArray = new DynamicArray();

      dynamicArray.add('value');
      dynamicArray.removeByIndex(0);

      expect(dynamicArray.length).toBe(0);
    });

    it('should throw if index is out of bounds', () => {
      const test = () => {
        const dynamicArray = new DynamicArray();

        dynamicArray.add('value');
        dynamicArray.removeByIndex(1);
      };

      expect(test).toThrow(Error);
    });
  });

  describe('indexOf()', () => {
    it('should return index that is > 0 if element is in array', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const dynamicArray = new DynamicArray();

      dynamicArray.add(value1);
      dynamicArray.add(value2);

      expect(dynamicArray.indexOf(value1)).toBe(0);
      expect(dynamicArray.indexOf(value2)).toBe(1);
    });

    it('should return -1 if element is not in array', () => {
      const dynamicArray = new DynamicArray();

      dynamicArray.add('value1');
      dynamicArray.add('value2');

      expect(dynamicArray.indexOf('value3')).toBe(-1);
    });
  });

  describe('toString()', () => {
    it('should return string representation of array', () => {
      const value1 = 'value1';
      const value2 = 'value2';
      const dynamicArray = new DynamicArray();
      const dynamicArrayStringified = `DynamicArray [ ${value1}, ${value2} ]`;

      dynamicArray.add(value1);
      dynamicArray.add(value2);

      expect(dynamicArray.toString()).toBe(dynamicArrayStringified);
    });
  });
});

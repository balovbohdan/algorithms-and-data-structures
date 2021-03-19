class DynamicArray {
  #length = 0;
  #capacity = 0;
  #staticArray = [];

  constructor(capacity = 1) {
    if (capacity < 0) {
      throw new Error(`Invalid dynamic array capacity: ${capacity}.`);
    } else {
      this.#capacity = capacity;
      this.#staticArray = new Array(capacity);
    }
  }

  get isEmpty() {
    return this.#length === 0;
  }

  get length() {
    return this.#length;
  }

  get(index) {
    const isIndexWithinLength = this.#getIsIndexWithinLength(index);

    if (isIndexWithinLength) {
      return this.#staticArray[index];
    } else {
      throw new Error(`Index is out of dynamic array bounds: ${index}.`);
    }
  }

  set(index, value) {
    const isIndexWithinLength = this.#getIsIndexWithinLength(index);

    if (isIndexWithinLength) {
      this.#staticArray[index] = value;
    } else {
      throw new Error(`Index is out of dynamic array bounds: ${index}.`);
    }
  }

  clear() {
    for (let i = 0; i < this.#length; i++) {
      delete this.#staticArray[i];
    }

    this.#length = 0;
  }

  add(value) {
    const valueIndex = this.#length;
    const isCapacityExceeded = valueIndex > this.#capacity;

    if (isCapacityExceeded) {
      this.#increaseStaticArrayCapacity();
    }

    this.#staticArray[valueIndex] = value;

    this.#length++;
  }

  contains(value) {
    const index = this.indexOf(value);

    return index !== -1;
  }

  removeByValue(value) {
    const index = this.indexOf(value);

    if (index === -1) {
      return false;
    } else {
      this.removeByIndex(index);

      return true;
    }
  }

  removeByIndex(index) {
    const isIndexWithinLength = this.#getIsIndexWithinLength(index);

    if (isIndexWithinLength) {
      const removedValue = this.#staticArray.splice(index, 1);

      this.#capacity = --this.#length;

      return removedValue;
    } else {
      throw new Error(`Index is out of dynamic array bounds: ${index}.`);
    }
  }

  indexOf(value) {
    for (let i = 0; i < this.#staticArray.length; i++) {
      if (this.#staticArray[i] === value) {
        return i;
      }
    }

    return -1;
  }

  toString() {
    const values = this.#staticArray.join(', ');

    return `DynamicArray [ ${values} ]`;
  }

  #increaseStaticArrayCapacity() {
    const staticArray = this.#staticArray;

    this.#capacity = this.#capacity === 0 ? 1 : this.#capacity * 2;
    this.#staticArray = new Array(this.#capacity);

    staticArray.forEach((item, index) => {
      this.#staticArray[index] = item;
    });
  }

  #getIsIndexWithinLength(index) {
    return index >= 0 && index < this.#length;
  }
}

export default DynamicArray;

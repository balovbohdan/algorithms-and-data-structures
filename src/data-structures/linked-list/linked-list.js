class LinkedList {
  #length = 0;
  #head = null;
  #tail = null;

  get length() {
    return this.#length;
  }

  set(value, index) {
    if (!index || index <= 0) {
      return this.unshift(value);
    } else if (index >= this.#length) {
      return this.push(value);
    } else {
      const node = this.#setByIndex(value, index);

      return node.value;
    }
  }

  delete(index) {
    if (index === 0) {
      return this.shift();
    } else if (index === this.#length - 1) {
      return this.pop();
    } else if (!index || index < 0 || index >= this.#length || this.#length === 0) {
      return null;
    } else {
      const node = this.#deleteByIndex(index);

      return node.value;
    }
  }

  push(value) {
    const node = LinkedList.#createNode(value);

    if (this.#tail) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = this.#tail = node;
    }

    this.#length++;

    return node.value;
  }

  pop() {
    if (this.#tail) {
      const nodeToPop = this.#tail;

      if (this.#head === this.#tail) {
        this.#head = this.#tail = null;
      } else {
        this.#tail = this.#findNodeBefore(this.#tail);
      }

      this.#length--;

      return nodeToPop.value;
    } else {
      return null;
    }
  }

  unshift(value) {
    const node = LinkedList.#createNode(value);

    if (this.#head) {
      node.next = this.#head;
      this.#head = node;
    } else {
      this.#head = this.#tail = node;
    }

    this.#length++;

    return node.value;
  }

  shift() {
    if (this.#head) {
      const nodeToShift = this.#head;

      if (this.#head === this.#tail) {
        this.#head = this.#tail = null;
      } else {
        this.#head = nodeToShift.next;
        nodeToShift.next = null;
      }

      this.#length--;

      return nodeToShift.value;
    } else {
      return null;
    }
  }

  get(index) {
    if (this.#length === 0 || index > this.#length - 1) {
      return null;
    } else if (!index || index <= 0) {
      return this.#head.value;
    } else if (index === this.#length - 1) {
      return this.#tail.value;
    } else {
      let currentIndex = 0;
      let currentNode = this.#head;

      while (currentNode && currentIndex !== index) {
        currentIndex++;

        currentNode = currentNode.next;
      }

      return currentNode.value;
    }
  }

  toString() {
    const values = this.#getValues().join(', ');

    return `LinkedList [ ${values} ]`;
  }

  #deleteByIndex(index) {
    const { leftNode, rightNode } = this.#findAdjacentNodes(index);

    leftNode.next = rightNode.next;
    rightNode.next = null;

    this.#length--;

    return rightNode;
  }

  #setByIndex(value, index) {
    const node = LinkedList.#createNode(value);
    const { leftNode, rightNode } = this.#findAdjacentNodes(index);

    leftNode.next = node;
    node.next = rightNode;

    this.#length++;

    return node;
  }

  #findAdjacentNodes(rightNodeIndex) {
    let index = 0;
    let leftNode = null;
    let rightNode = this.#head;

    while (rightNode && index !== rightNodeIndex) {
      leftNode = rightNode;
      rightNode = rightNode.next;

      index++;
    }

    return { leftNode, rightNode };
  }

  #findNodeBefore(node) {
    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.next === node) {
        break;
      } else {
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }

  #getValues() {
    const values = [];
    let currentNode = this.#head;

    while (currentNode) {
      values.push(currentNode.value);

      currentNode = currentNode.next;
    }

    return values;
  }

  static #createNode(value) {
    return {
      next: null,
      value,
    };
  }
}

export default LinkedList;

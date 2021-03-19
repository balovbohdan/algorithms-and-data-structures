class Stack {
  #length = 0;
  #head = null;

  get length() {
    return this.#length;
  }

  get isEmpty() {
    return this.#length === 0;
  }

  push(value) {
    const node = Stack.#createNode(value);

    node.next = this.#head;
    this.#head = node;

    this.#length++;
  }

  pop() {
    if (this.#head) {
      const nodeToPop = this.#head;

      this.#head = this.#head.next;

      this.#length--;

      return nodeToPop.value;
    } else {
      return null;
    }
  }

  static #createNode(value) {
    return {
      next: null,
      value,
    };
  }
}

export default Stack;

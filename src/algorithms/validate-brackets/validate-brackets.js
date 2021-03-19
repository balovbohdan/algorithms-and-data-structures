import Stack from '../../data-structures/stack';

import { BRACKETS_INFO, BRACKET_TYPES, BRACKET_PAIRS } from './constants';

const validateBrackets = (brackets) => {
  if (brackets === '') {
    return true;
  } else {
    const stack = new Stack();
    const bracketsParsed = brackets.split('');

    for (const bracket of brackets) {
      const bracketInfo = BRACKETS_INFO[bracket];

      if (!bracketInfo) {
        throw new Error(`Got invalid bracket: ${bracket}.`);
      } else if (BRACKETS_INFO[bracket].type === BRACKET_TYPES.LEFT) {
        stack.push(bracket);
      } else if (stack.isEmpty || stack.pop() !== BRACKET_PAIRS[bracket]) {
        return false;
      }
    }

    return stack.isEmpty;
  }
};

export default validateBrackets;

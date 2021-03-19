export const BRACKET_TYPES = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

export const BRACKETS_INFO = {
  '(': { type: BRACKET_TYPES.LEFT },
  ')': { type: BRACKET_TYPES.RIGHT },
  '{': { type: BRACKET_TYPES.LEFT },
  '}': { type: BRACKET_TYPES.RIGHT },
  '[': { type: BRACKET_TYPES.LEFT },
  ']': { type: BRACKET_TYPES.RIGHT },
  '<': { type: BRACKET_TYPES.LEFT },
  '>': { type: BRACKET_TYPES.RIGHT },
};

export const BRACKET_PAIRS = {
  '(': ')',
  ')': '(',
  '{': '}',
  '}': '{',
  '[': ']',
  ']': '[',
  '<': '>',
  '>': '<',
};

/**
 * All key-codes
 */
export const keyCodes = {
  ENTER: 13,
  ESC: 27,
  BACKSPACE: 8,
  TAB: 9,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  SPACE: 32,

  PAUSE: 19,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,

  INSERT: 45,
  DELETE: 46,

  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,

  DOT: 190,
  DOT_NUMPAD: 110,
  COMA: 188,
  COMA_NUMPAD: 0,

  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,

  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
};

/**
 * Return true when the keyCode is a number
 */
export const isNumber = (keyCode): boolean => keyCode >= keyCodes.ZERO && keyCode <= keyCodes.NINE;

/**
 * Identifies if the keyCode is a letter from A to Z
 */
export const isLetter = (keyCode): boolean => keyCode >= keyCodes.A && keyCode <= keyCodes.Z;

/**
 * Identifies if the keyCode is a navigation key, e.g.: UP, RIGHT, DOWN or LEFT
 */
export const isNavigation = (keyCode): boolean => keyCode >= keyCodes.LEFT && keyCode <= keyCodes.DOWN;

/**
 * Returns true when the keyCode is Space, Enter or Tab
 */
export const isWhitespace = (keyCode): boolean =>
  keyCode === keyCodes.SPACE || keyCode === keyCodes.ENTER || keyCode === keyCodes.TAB;

/**
 * Return true if the keyCode is a F key from F1 to F12
 */
export const isF1ToF12 = (keyCode): boolean => keyCode >= keyCodes.F1 && keyCode <= keyCodes.F12;

/**
 * Returns a string representation of the keyCode
 *
 * @example javascript
 * KeyCodes.keyCodeToString(90);
 * -> will return 'Z'
 * KeyCodes.keyCodeToString(50)
 * -> will return '2'
 */
export const keyCodeToString = (keyCode): string => {
  if (isLetter(keyCode) || isNumber(keyCode)) {
    return String.fromCharCode(keyCode);
  }

  return getKeyNameFromKeyCode(keyCode);
};

/**
 * Returns a string representation based on the programmatic name of the keyCode
 * @example javascript
 * KeyCodes.getKeyNameFromKeyCode(90);
 * -> 'Z'
 *
 * KeyCodes.getKeyNameFromKeyCode(50);
 * -> 'TWO'
 *
 * KeyCodes.getKeyNameFromKeyCode(13);
 * -> 'ENTER'
 *
 * KeyCodes.getKeyNameFromKeyCode(121);
 * -> 'F10'
 */
export const getKeyNameFromKeyCode = (keyCode): string => Object.keys(keyCodes).find(key => keyCodes[key] === keyCode);

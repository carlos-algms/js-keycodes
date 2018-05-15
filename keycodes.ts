/**
 * Identify and work with keycodes on javascript
 */
export class KeyCodes {
  /**
   * All key-codes
   */
  readonly codes = {
    ENTER     : 13,
    ESC       : 27,
    BACKSPACE : 8,
    TAB       : 9,
    SHIFT     : 16,
    CTRL      : 17,
    ALT       : 18,
    SPACE     : 32,

    PAUSE     : 19,
    PAGE_UP   : 33,
    PAGE_DOWN : 34,
    END       : 35,
    HOME      : 36,

    LEFT      : 37,
    UP        : 38,
    RIGHT     : 39,
    DOWN      : 40,

    INSERT    : 45,
    DELETE    : 46,

    F1        : 112,
    F2        : 113,
    F3        : 114,
    F4        : 115,
    F5        : 116,
    F6        : 117,
    F7        : 118,
    F8        : 119,
    F9        : 120,
    F10       : 121,
    F11       : 122,
    F12       : 123,

    DOT       : 190,
    DOT_NUMPAD: 110,
    COMA      : 188,
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

    ZERO  : 48,
    ONE   : 49,
    TWO   : 50,
    THREE : 51,
    FOUR  : 52,
    FIVE  : 53,
    SIX   : 54,
    SEVEN : 55,
    EIGHT : 56,
    NINE  : 57,
  };


  /**
   * Return true when the keyCode is a number
   */
  readonly isNumber = (keyCode): boolean => (keyCode >= this.codes.ZERO && keyCode <= this.codes.NINE);

  /**
   * Identifies if the keyCode is a letter from A to Z
   */
  readonly isLetter = (keyCode): boolean => (keyCode >= this.codes.A && keyCode <= this.codes.Z);

  /**
   * Identifies if the keyCode is a navigation key, e.g.: UP, RIGHT, DOWN or LEFT
   */
  readonly isNavigation = (keyCode): boolean => (keyCode >= this.codes.LEFT && keyCode <= this.codes.DOWN);

  /**
   * Returns true when the keyCode is Space, Enter or Tab
   */
  readonly isWhitespace = (keyCode): boolean => (
    keyCode === this.codes.SPACE || keyCode === this.codes.ENTER || keyCode === this.codes.TAB
  )

  /**
   * Return true if the keyCode is a F key from F1 to F12
   */
  readonly isF1ToF12 = (keyCode): boolean => (keyCode >= this.codes.F1 && keyCode <= this.codes.F12);

  /**
   * Returns a string representation of the keyCode
   *
   * @example javascript
   * KeyCodes.keyCodeToString(90);
   * -> will return 'Z'
   * KeyCodes.keyCodeToString(50)
   * -> will return '2'
   */
  readonly keyCodeToString = (keyCode): string => {
    if (this.isLetter(keyCode) || this.isNumber(keyCode)) {
      return String.fromCharCode(keyCode);
    }

    return this.getKeyNameFromKeyCode(keyCode);
  }

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
  readonly getKeyNameFromKeyCode = (keyCode): string => (
    Object.keys(this.codes).find(key => this.codes[key] === keyCode)
  )
}

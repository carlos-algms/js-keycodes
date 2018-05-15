var KeyCodes = (function (){
  var codes = {
    ENTER : 13,
    ESC : 27,
    BACKSPACE : 8,
    TAB : 9,
    SHIFT : 16,
    CTRL : 17,
    ALT : 18,
    SPACE : 32,

    PAUSE : 19,
    PAGE_UP : 33,
    PAGE_DOWN : 34,
    END : 35,
    HOME : 36,

    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40,

    INSERT : 45,
    DELETE : 46,

    F1 : 112,
    F2 : 113,
    F3 : 114,
    F4 : 115,
    F5 : 116,
    F6 : 117,
    F7 : 118,
    F8 : 119,
    F9 : 120,
    F10 : 121,
    F11 : 122,
    F12 : 123,

    DOT : 190,
    DOT_NUMPAD : 110,
    COMA : 188,
    COMA_NUMPAD : 0,

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
    NINE: 57
  };


  codes.isNumber = function(keyCode) {
    return keyCode >= codes.ZERO && keyCode <= codes.NINE;
  };

  codes.isLetter = function(keyCode) {
    return (keyCode >= codes.A && keyCode <= codes.Z);
  };

  codes.isNavigation = function(keyCode) {
    return keyCode >= codes.LEFT && keyCode <= codes.DOWN;
  };

  codes.isWhitespace = function(keyCode) {
    return keyCode === codes.SPACE || keyCode === codes.ENTER || keyCode === codes.TAB;
  };

  codes.isF1ToF12 = function( keyCode ) {
      return keyCode >= codes.F1 && keyCode <= codes.F12;
  };

  codes.keyCodeToString = function ( keyCode ){
    if( codes.isLetter( keyCode ) || codes.isNumber( keyCode ) )
      return String.fromCharCode( keyCode );

    return codes.getKeyNameFromKeyCode( keyCode );
  };

  codes.getKeyNameFromKeyCode = function( keyCode ) {
    for(var key in codes) {
      if(codes[key] === keyCode) return key;
    }

    return null;
  };


  return codes;
})();

if (typeof exports === 'object')
  module.exports = codes;


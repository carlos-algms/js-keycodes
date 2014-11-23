(function (root, factory) {
  if (typeof exports === 'object')
    return module.exports = factory;

  root.KeyCodes = factory;

})(this, function (){
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
    COMA_NUMPAD : 0
  };

  return codes;
}());

# js-keycodes

[![travis build](https://api.travis-ci.com/carlos-algms/js-keycodes.svg?branch=master)](https://travis-ci.com/carlos-algms/js-keycodes)
[![codecov](https://codecov.io/gh/carlos-algms/js-keycodes/branch/master/graph/badge.svg)](https://codecov.io/gh/carlos-algms/js-keycodes/branch/master)
[![NPM version](https://img.shields.io/npm/v/js-keycodes)](https://www.npmjs.com/package/js-keycodes)
[![Downloads](https://img.shields.io/npm/dy/js-keycodes)](https://www.npmjs.com/package/js-keycodes)
[![License](https://img.shields.io/npm/l/js-keycodes)](https://tldrlegal.com/license/mit-license)

Key-Codes as constants and helper functions to identify characters

# Installation

| NPM                    | Yarn                   |
| ---------------------- | ---------------------- |
| `npm i -S js-keycodes` | `yarn add js-keycodes` |

## Available Key Codes Constants

```javascript
import { keyCodes } from 'js-keycodes';

keyCodes.ENTER === 13;
// -> true
keyCodes.F12 === 123;
// -> true

window.addEventListener('keyup', (e) => {
  if (e.keyCode === keyCodes.ENTER) {
    console.log('ENTER was pressed');
  }
});
```

| Constant Name | Key Code value |
| ------------- | -------------- |
| ENTER         | 13             |
| ESC           | 27             |
| BACKSPACE     | 8              |
| TAB           | 9              |
| SHIFT         | 16             |
| CTRL          | 17             |
| ALT           | 18             |
| SPACE         | 32             |
| PAUSE         | 19             |
| PAGE_UP       | 33             |
| PAGE_DOWN     | 34             |
| END           | 35             |
| HOME          | 36             |
| LEFT          | 37             |
| UP            | 38             |
| RIGHT         | 39             |
| DOWN          | 40             |
| INSERT        | 45             |
| DELETE        | 46             |
| F1            | 112            |
| F2            | 113            |
| F3            | 114            |
| F4            | 115            |
| F5            | 116            |
| F6            | 117            |
| F7            | 118            |
| F8            | 119            |
| F9            | 120            |
| F10           | 121            |
| F11           | 122            |
| F12           | 123            |
| DOT           | 190            |
| DOT_NUMPAD    | 110            |
| COMA          | 188            |
| COMA_NUMPAD   | 0              |
| A             | 65             |
| B             | 66             |
| C             | 67             |
| D             | 68             |
| E             | 69             |
| F             | 70             |
| G             | 71             |
| H             | 72             |
| I             | 73             |
| J             | 74             |
| K             | 75             |
| L             | 76             |
| M             | 77             |
| N             | 78             |
| O             | 79             |
| P             | 80             |
| Q             | 81             |
| R             | 82             |
| S             | 83             |
| T             | 84             |
| U             | 85             |
| V             | 86             |
| W             | 87             |
| X             | 88             |
| Y             | 89             |
| Z             | 90             |
| ZERO          | 48             |
| ONE           | 49             |
| TWO           | 50             |
| THREE         | 51             |
| FOUR          | 52             |
| FIVE          | 53             |
| SIX           | 54             |
| SEVEN         | 55             |
| EIGHT         | 56             |
| NINE          | 57             |

## Helper functions

```javascript
import * as KeyCodes from 'js-keycodes';
```

Or individual functions:

```javascript
import { isLetter, isNumber } from 'js-keycodes';
```

#### Verify if a keyCode is a letter

```javascript
import { isLetter, keyCodeToString } from 'js-keycodes';

window.addEventListener('keyup', (e) => {
  if (isLetter(e.keyCode)) {
    const char = keyCodeToString(e.keyCode);
    console.log(`"${char}" was pressed`);
  }
});
```

#### Verify if ENTER is pressed on an event

```javascript
import { keyCodes } from 'js-keycodes';

const handleAnEvent = (event) => {
  if (event.keyCode === keyCodes.ENTER) {
    // Do your stuff here.
  }
};
```

#### `KeyCodes.isNumber()`

Return true if the keyCode is a number from `0` to `9`.

#### `KeyCodes.isLetter()`

Return true if the keyCode is a letter from `A` to `Z`.

#### `KeyCodes.isNavigation()`

Return true if the keyCode represents an Arrow key ⬆️, ⬇️, ⬅️ or ➡️.

#### `KeyCodes.isWhitespace()`

Return true if the keyCode represent `ENTER`, `SPACE` or `TAB`

#### `KeyCodes.isF1ToF12()`

Return true if the keyCode represent any of the `F` buttons from `F1` to `F12`

#### `KeyCodes.keyCodeToString()`

Return a string representation of the keyCode.

```javascript
import { keyCodeToString } from 'js-keycodes';

const myLetter = keyCodeToString(90);
// -> 'Z'

const myNumber = keyCodeToString(50);
//  '2'
```

#### `KeyCodes.getKeyNameFromKeyCode()`

Return a string representation based on the programmatic name of the keyCode

```javascript
import { getKeyNameFromKeyCode } from 'js-keycodes';

const myLetter = getKeyNameFromKeyCode(90);
// -> 'Z'

const myNumber = getKeyNameFromKeyCode(50);
// -> 'TWO'

const myKey = getKeyNameFromKeyCode(13);
// -> 'ENTER'

const myF = getKeyNameFromKeyCode(121);
// -> 'F10'
```

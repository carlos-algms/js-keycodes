js-keycodes
===========
![travis build](https://api.travis-ci.org/js-keycodes.svg?branch=master)
![Codecov](https://img.shields.io/codecov/c/github/js-keycodes.svg)
![NPM version](https://img.shields.io/npm/v/js-keycodes.svg)
![Downloads](https://img.shields.io/npm/dy/js-keycodes.svg)
![License](https://img.shields.io/npm/l/js-keycodes.svg)

Identify and work with keyCodes on JavaScript

# Install

```shell
npm i -S js-keyCodes
```

## Usage

First import the lib into your code:

```javascript
import * as KeyCodes from 'js-keycodes';
```

Or individual functions:

```javascript
import { isLetter, isNumber } from 'js-keycodes';
```

#### Verify if a keyCode is a letter

```javascript
const myKeyCode = 90;
if (KeyCodes.isLetter(myKeyCode)) {
  // Do stuff if your keyCode is a letter
}
```

#### Verify if ENTER is pressed on an event

```js
const handleAnEvent = (event) => {
  if (event.which === KeyCodes.ENTER) {
    // Do your stuff here.
  }
}
```

## Methods

#### `KeyCodes.isNumber()`
Return true if the keyCode is a number from 0 to 9.

#### `KeyCodes.isLetter()`
Return true if the keyCode is a letter from A to Z.

#### `KeyCodes.isNavigation()`
Return true if the keyCode represents an Arrow key like UP, DOWN, LEFT or RIGHT.

#### `KeyCodes.isWhitespace()`
Return true if the keyCode represent ENTER, SPACE or TAB

#### `KeyCodes.isF1ToF12()`
Return true if the keyCode represent any of the F buttons from F1 to F12

#### `KeyCodes.keyCodeToString()`
Return a string representation of the keyCode.

```javascript
const myLetter = KeyCodes.keyCodeToString(90);
// -> 'Z'

const myNumber = KeyCodes.keyCodeToString(50)
//  '2'
```

#### `KeyCodes.getKeyNameFromKeyCode()`
Return a string representation based on the programmatic name of the keyCode
```javascript
const myLetter = KeyCodes.getKeyNameFromKeyCode(90);
// -> 'Z'

const myNumber = KeyCodes.getKeyNameFromKeyCode(50);
// -> 'TWO'

const myKey = KeyCodes.getKeyNameFromKeyCode(13);
// -> 'ENTER'

const myF = KeyCodes.getKeyNameFromKeyCode(121);
// -> 'F10'
```


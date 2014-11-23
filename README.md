js-keycodes
===========

Identify and work with keycodes on javascript

##Install
You can install it via bower

```shell
bower install jskeycodes --save
```

##Basic Usage

####Verify if a keycode is a letter

```js
var myKeyCode = 90;
if( KeyCodes.isLetter(myKeyCode) ) {
  //Do stuff if your keycode is a letter
}
```

####Verify if ENTER is pressed on an event

```js
var myCallback = function(event) {
  if( event.which === KeyCodes.ENTER ) {
    //Do your stuff here.
  }
}
```

## Methods

#### KeyCodes.isNumber()
Return true if the keycode is a number from 0 to 9.


#### KeyCodes.isLetter()
Return true if the keycode is a letter from A to Z.

#### KeyCodes.isNavigation()
Return true if the keycode represents an Arrow key like UP, DOWN, LEFT or RIGHT.

#### KeyCodes.isWhitespace()
Return true if the keycode represent ENTER, SPACE or TAB

#### KeyCodes.isF1ToF12()
Return true if the keycode represent any of the F buttons from F1 to F12

#### KeyCodes.keyCodeToString()
Return a string representation of the keycode.

```js
var myLetter = KeyCodes.keyCodeToString(90);
//will return 'Z'

var myNumber = KeyCodes.keyCodeToString(50)
//will return '2'
```

#### KeyCodes.getKeyNameFromKeyCode()
Return a string representation based on the programmatic name of the keycode
```js
var myLetter = KeyCodes.getKeyNameFromKeyCode(90);
//will return 'Z'

var myNumber = KeyCodes.getKeyNameFromKeyCode(50);
//will return 'TWO'

var myKey = KeyCodes.getKeyNameFromKeyCode(13);
//will return 'ENTER'

var myF = KeyCodes.getKeyNameFromKeyCode(121);
//will return 'F10'
```


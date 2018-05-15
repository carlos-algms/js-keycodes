import { isF1ToF12, isLetter, isNavigation, isNumber, isWhitespace, keyCodes } from '../keycodes';

test('is Number', () => {
  expect(isNumber(keyCodes.TWO)).toBeTruthy();
});

test('is Letter', () => {
  expect(isLetter(keyCodes.C)).toBeTruthy();
});

test('is Navigation', () => {
  expect(isNavigation(keyCodes.UP)).toBeTruthy();
});

test('is white space', () => {
  expect(isWhitespace(keyCodes.ENTER)).toBeTruthy();
  expect(isWhitespace(keyCodes.TAB)).toBeTruthy();
});

test('is one of Fs', () => {
  expect(isF1ToF12(keyCodes.F10)).toBeTruthy();
});

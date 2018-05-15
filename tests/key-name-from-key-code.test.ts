import { getKeyNameFromKeyCode, keyCodes } from '../keycodes';

test('A number', () => {
  expect(getKeyNameFromKeyCode(keyCodes.SEVEN)).toBe('SEVEN');
});

test('A Letter', () => {
  expect(getKeyNameFromKeyCode(keyCodes.Z)).toBe('Z');
});

test('A navigation', () => {
  expect(getKeyNameFromKeyCode(keyCodes.UP)).toBe('UP');
});

test('A white space', () => {
  expect(getKeyNameFromKeyCode(keyCodes.TAB)).toBe('TAB');
});

test('A Fxx', () => {
  expect(getKeyNameFromKeyCode(keyCodes.F10)).toBe('F10');
});

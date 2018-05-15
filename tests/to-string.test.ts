import { keyCodeToString, keyCodes } from '../src/keycodes';

test('A number', () => {
  expect(keyCodeToString(keyCodes.TWO)).toBe('2');
});

test('A Letter', () => {
  expect(keyCodeToString(keyCodes.C)).toBe('C');
});

test('A navigation', () => {
  expect(keyCodeToString(keyCodes.UP)).toBe('UP');
});

test('A white space', () => {
  expect(keyCodeToString(keyCodes.TAB)).toBe('TAB');
});

test('A Fxx', () => {
  expect(keyCodeToString(keyCodes.F10)).toBe('F10');
});

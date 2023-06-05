import { expect, test } from 'vitest';
import is from './is';

test('is 正常系', () => {
  expect(is.development).toBe(true);
  expect(is.not.development).toBe(false);

  expect(is.production).toBe(false);
  expect(is.not.production).toBe(true);
});

test('nullable 正常系', () => {
  expect(is.nullable(null)).toBe(true);
  expect(is.not.nullable(null)).toBe(false);

  expect(is.nullable('')).toBe(false);
  expect(is.not.nullable('')).toBe(true);
});

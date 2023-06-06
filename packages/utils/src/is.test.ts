import { expect, test } from 'vitest';
import { is, not } from './is';

test('is 正常系', () => {
  expect(is.development).toBe(true);
  expect(not.development).toBe(false);

  expect(is.production).toBe(false);
  expect(not.production).toBe(true);
});

test('nullable 正常系', () => {
  expect(is.nullable(null)).toBe(true);
  expect(not.nullable(null)).toBe(false);

  expect(is.nullable('')).toBe(false);
  expect(not.nullable('')).toBe(true);
});

import { Nullable } from './interfaces';

const development = true;
const production = false;

// 主な実装
export const is = {
  production,
  development,
  nullable: <T>(value: T | null | undefined): value is Nullable => value == null,
};

export const not = {
  development: !development,
  production: !production,
  nullable: <T>(value: T | null | undefined): value is T => !is.nullable(value),
};

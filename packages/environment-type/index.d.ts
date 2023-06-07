/* eslint-disable */
declare module '*.scss';
declare module '*.png';

declare namespace NodeJS {
  interface ProcessEnv {
    TARGET: string;
  }
}

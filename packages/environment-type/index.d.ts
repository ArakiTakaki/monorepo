/* eslint-disable */
declare module '*.scss';
declare module '*.png';

declare namespace NodeJS {
  interface ProcessEnv {
    TARGET: string;
    MICROCMS_DOMAIN: string;
    MICROCMS_API_KEY: string;
  }
}

declare namespace Image {
  interface Content {
    src: string;
    alt: string;
  }
}

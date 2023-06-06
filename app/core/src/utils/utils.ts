// ref: https://gist.github.com/ArakiTakaki/c5d0e1e310bd73bf36da9a264dee3c3c
export const notDefinedFunction = (message: string) => () => {
  const error = new Error(message);
  error.name = 'FunctionNotDefinedError';
  throw error;
};

export const preventDetaulf = <E extends Event>(listener: (ev: E) => void) => {
  return (event: E) => {
    event.preventDefault();
    listener(event);
  };
};

export const stopPropagation = <E extends Event>(listener: (ev: E) => void) => {
  return (event: E) => {
    event.stopPropagation();
    listener(event);
  };
};

// 数値系
/**
 * @param t1 - 開始地点
 * @param t2 - 終了地点
 * @param a - 経過 (0-1)
 * @returns t1とt2のa線形補完
 */
export const mix = (t1: number, t2: number, a: number) => t1 * (1 - a) + t2 * a;

/**
 * between
 * @param min 最小値
 * @param max 最大値
 * @param a ターゲットの値
 * @param offset 外部許可
 * @returns
 */
export const between = (min: number, max: number, a: number, offset = 0): boolean =>
  a >= min - offset && a <= max + offset;

/**
 * xを度数からラジアンに変換する
 */
export const radians = (x: number) => (x / 180) * Math.PI;

/**
 * xをラジアンから度数に変換する
 */
export const degrees = (x: number) => (x / Math.PI) * 180;

/**
 * 0-1に変換する
 * @param t 対象数値
 * @param min 最小数値
 * @param max 最大数値
 * @returns 0-1
 * @example
 * ```
 * normalize(2, 1, 3) // => 0.5
 * ```
 */
export const normalize = (t: number, min: number, max: number) => (t - min) / (max - min);

/**
 * @param x 導出元数値
 * @param range1 最小値
 * @param range2 最大値
 * @returns 最小値と最大値の間を返却する
 * @example (1.1, 0, 1) => 1
 * @example (-0.1, 0, 1) => 0
 * @example (1.1, 1, 0) => 1
 * @example (-0.1, 1, 0) => 0
 */
export const minMax = (x: number, range1: number, range2: number): number =>
  Math.min(Math.max(range2, range1), Math.max(Math.min(range2, range1), x));

export const isBetween = (x: number, from: number, to: number): boolean => x >= from && x <= to;

/**
 * シグモイド関数
 * ref https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%B0%E3%83%A2%E3%82%A4%E3%83%89%E9%96%A2%E6%95%B0
 * このライブラリも視野に入れたい https://github.com/sititou70/awesome-sigmoid/blob/master/src/index.ts
 */
export const sigmoid = (a: number, b: number) => (x: number) => 1 / (1 + Math.exp(-(a * x + b)));

/**
 * 活性化関数
 * ref https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%8C%96%E7%B7%9A%E5%BD%A2%E9%96%A2%E6%95%B0
 * @param a
 * @returns
 */
export const rectifiedLinearUnit = (a: number) => Math.max(0, a);

/**
 * 出力層 ソフトマックス関数
 * @param a 数列
 * @returns
 */
export const softmax = (...a: number[]) => {
  const max = Math.max(...a);
  const nums = a.map((val) => val - max);
  const x = nums.reduce((sums, num) => sums + Math.exp(num), 0);
  return nums.map((val) => val / x);
};

/**
 *
 * @param t
 * @param min
 * @param max
 * @param cb
 */
export const betweenNormalized = (t: number, min: number, max: number, cb: (t: number) => void) => {
  if (isBetween(t, min, max)) {
    cb(normalize(t, min, max));
  }
};

// Type系
export const isString = (arg: unknown): arg is string => {
  return typeof arg === 'string';
};

export const isObject = (target: unknown): target is object => {
  const type = typeof target;
  return target != null && (type == 'object' || type == 'function');
};

export const isBoolean = (arg: unknown): arg is boolean => {
  return typeof arg === 'boolean';
};
export const isNumber = (arg: unknown): arg is number => typeof arg === 'number';

// その他util
/**
 * よくあるrange
 */
export const range = (t: number): number[] => [...new Array(t)].map((_, index) => index);

// Throw系
/**
 * runtimeでrequiredを管理するもの、外部で使用するやつー
 * @param target - 対象のもの（大体Stringが入ると思う。
 * @param error - エラーオブジェクト
 */
export const required = <T>(target: T | undefined | null, error: T | Error): T => {
  if (target == null) {
    if (error instanceof Error) throw error;
    return error;
  }
  return target;
};

/**
 * イミュータブルにArrayを編集するメソッド
 * @param target 対象となるArray
 * @param value 編集後Value
 * @param index 編集するIndex番号
 * @returns
 */
export const editArray = <T>(target: Array<T>, value: T, index: number) => {
  return [...target.slice(0, index), value, ...target.slice(index + 1, Infinity)];
};

/**
 * invalid dateかどうかを判定する
 * @param target Invalid Dateの可能性があるもの
 * @returns invalidDateの場合true
 */
export const isInvalidDate = (target: Date): boolean => Number.isNaN(target.getDate());

const createZeroMap = () => {
  const zeroMap = new Map<number, Intl.NumberFormat>();
  const createFillZero = (value: number) =>
    new Intl.NumberFormat('ja', {
      minimumIntegerDigits: value,
      useGrouping: false,
    });
  /**
   * ゼロ埋めを実施するメソッド
   * @param value 対象となる値
   * @param zeroNums 埋めるゼロの数
   * @returns 数値
   */
  const result = (value: number, zeroNums: number): string => {
    const getFormatter = (zeroNums: number) => {
      const result = zeroMap.get(zeroNums);
      if (result == null) {
        const createdValue = createFillZero(zeroNums);
        zeroMap.set(zeroNums, createdValue);
        return createdValue;
      }
      return result;
    };

    return getFormatter(zeroNums).format(value);
  };
  return result;
};
export const fillZero = createZeroMap();

/**
 * @param arr
 * @param length
 * @returns
 */
export const rough = <T>(arr: ArrayLike<T>, length: number) => {
  const number: T[][] = [];
  for (let i = 0; i < arr.length; i += length) {
    number[number.length] = [];
    for (let j = 0; j < length; j++) {
      if (arr[i + j] == null) continue;
      number[number.length - 1].push(arr[i + j]);
    }
  }
  return number;
};

export const randomXorShift = (seed: number) => {
  let w = seed;
  let x = 123456789;
  let y = 362436069;
  let z = 521288629;
  return (min = 0, max = 1) => {
    const t = x ^ (x << 11);
    x = y;
    y = z;
    z = w;
    w = w ^ (w >>> 19) ^ (t ^ (t >>> 8));

    const r = Math.abs(w);
    return min + (r % (max + 1 - min));
  };
};

// https://liginc.co.jp/422039

/**
 * @param num 指定値
 * @param min 最小値
 * @param max 最大値
 */
export const clamp = (num: number, min: number, max: number) => {
  return min > num ? min : max < num ? max : num;
};

/**
 * @param num 指定値
 * @param min 最小値
 * @param max 最大値
 */
export const hoop = (num: number, min: number, max: number) => {
  const range = max - min + 1;
  let mod = (num - min) % range;
  if (0 > mod) {
    mod = range + mod;
  }
  return mod + min;
};

/**
 * @param {number} col - getImageData の返り値 width
 * @param {number} x - x座標（0から始まる）
 * @param {number} y - y座標（0から始まる）
 * @return {number}
 */
export const getIndex = (col: number, x: number, y: number): number => col * y + x;

// 温度系のutil
export const temperatureUtil = {
  // 華氏から摂氏へ
  fahrenheitToCelsius: (t: number) => (t - 32) / 1.8,
  // 摂氏から華氏へ
  celsiusToFahrenheit: (t: number) => t * 1.8 + 32,
};

interface Position {
  x: number;
  y: number;
}
export const distance2D = (p1: Position, p2: Position) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

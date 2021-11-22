/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in
  
  ### Question
  
  Implement the built-in Parameters<T> generic without using it.
  
  > View on GitHub: https://tsch.js.org/3312
*/

/* _____________ Your Code Here _____________ */

/**
 * 思路：
 * 先用继承一个函数类型，这样就可以使用infer推导出参数到一个变量，
 * 获取到参数变量F，实际上F就是参数类型的数组
 * 将F迭代出一个新数组返回
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer F
) => any
  ? [...F]
  : [];

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3312/answer
  > View solutions: https://tsch.js.org/3312/solutions
  > More Challenges: https://tsch.js.org
*/

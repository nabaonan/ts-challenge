/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #中等 #array #built-in
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  键入函数`PromiseAll`，它接受PromiseLike对象数组，返回值应为`Promise<T>`，其中`T`是解析的结果数组。
  
  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  // expected to be `Promise<[number, number, string]>`
  const p = Promise.all([promise1, promise2, promise3] as const)
  ```
  
  > 在 Github 上查看：https://tsch.js.org/20/zh-CN
*/

/* _____________ 你的代码 _____________ */

/**
 * 思路
 * 先要将参数的类型都取出来赋值到T
 * declare function PromiseAll<T extends unknown[]>(values:  [...T] ):  Promise<T>
 *
 * [1,2,3] as const 是将数组转成只读的，所以要加个readonly
 *
 * 返回的结果内部不能还包含Promise类型，所以对于第二种情况则需要将Promise.resolve(3)中的类型取出来
 *
 * 需要遍历T中每个属性，将Promise类型的对象进行转化
 * [K in keyof T]: T[K] extends Promise<infer F>? F:T[K]
 *
 * 参考：https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-promise-all.md
 */

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer F> ? F : T[K];
}>;

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils';

const test = [1, 2, 3] as const;
const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const test2 = typeof promiseAllTest1;

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/20/answer/zh-CN
  > 查看解答：https://tsch.js.org/20/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

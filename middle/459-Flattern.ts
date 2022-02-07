/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #中等 #array
  
  ### 题目
  
  In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
  
  For example:
  
  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```
  
  > 在 Github 上查看：https://tsch.js.org/459/zh-CN
*/


/* _____________ 你的代码 _____________ */

/**
 * 思路
 * 推导出第一个数字，判断如果是数组则拼接起来递归调用，
 * 如果不是数组则将后续参数递归扁平化
 */
  

type Flatten<T extends any[]> = T extends [infer First, ... infer Other] ? First extends any[] ? Flatten<[...First, ...Other]> : [First, ...Flatten<Other>] : T

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/459/answer/zh-CN
  > 查看解答：https://tsch.js.org/459/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/


/*
  191 - 追加参数
  -------
  by Maciej Sikora (@maciejsikora) #中等 #arguments
  
  ### 题目
  
  > 由 @antfu 翻译
  
  实现一个范型 `AppendArgument<Fn, A>`，对于给定的函数类型 `Fn`，以及一个任意类型 `A`，返回一个新的函数 `G`。`G` 拥有 `Fn` 的所有参数并在末尾追加类型为 `A` 的参数。
  
  ```typescript
  type Fn = (a: number, b: string) => number
  
  type Result = AppendArgument<Fn, boolean> 
  // 期望是 (a: number, b: string, x: boolean) => number
  ```
  
  > 本挑战来自于 [@maciejsikora](https://github.com/maciejsikora) 在 Dev.io 上的[文章](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c)
  
  > 在 Github 上查看：https://tsch.js.org/191/zh-CN
*/

/* _____________ 你的代码 _____________ */

/**
 * 思路：
 * 首先要获取到函数的参数，使用extends 一个函数 ， 通过infer 就可以推导出参数的类型
 * 这里注意要推导动态参数的类型需要这样写(...args: infer K)  参数是个数组，所以K就是一个数组
 * 然后再组织好一个新的函数，构建一个新的数组作为参数的类型  注意新的函数也要用扩展运算符...，因为要将参数收集到一个数组里，这样和后面的数组类型的参数才能匹配，所以要这样定义(...args: [...K, A])
 * 最后函数的返回值是没有限制的，所以讲原有的返回值类型R推导出来原封不动的返回既可
 *
 *
 */
type AppendArgument<Fn, A> = Fn extends (...args: infer K) => infer R
  ? (...args: [...K, A]) => R
  : Fn;

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/191/answer/zh-CN
  > 查看解答：https://tsch.js.org/191/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

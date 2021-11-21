/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #easy #array
  
  ### Question
  
  Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.
  实现一个泛型的 First <T> ，它接受一个 数组类型 T 并返回它的第一个元素的类型。
  For example
  
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  
  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```
  
  > View on GitHub: https://tsch.js.org/14
*/

/* _____________ Your Code Here _____________ */

/**
 * 解法1 ： 通过使用extends 0 判断是否相等
 */
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

//解法2 通过继承一个空数组判断是否相等
type First<T extends any[]> = T extends [] ? never : T[0];

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/14/answer
  > View solutions: https://tsch.js.org/14/solutions
  > More Challenges: https://tsch.js.org
*/

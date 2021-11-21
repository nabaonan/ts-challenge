/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in
  
  ### Question
  
  Implement the built-in Exclude<T, U>
  > Exclude from T those types that are assignable to U
从类型T中刨除类型U
  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */
//T extends U 标识用T中的类型依次和U进行比较，如果U中存在多个，则进行叉乘比较
type MyExclude<T, U> = T extends U ? never : T;

type offical = Exclude<'a' | 'b' | 'c', 'a'>;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<
    Equal<
      MyExclude<'a' | 'b' | 'c', 'a' | 'b'>,
      Exclude<'a' | 'b' | 'c', 'a' | 'b'>
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/

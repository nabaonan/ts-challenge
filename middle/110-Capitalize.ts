/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.
  
  For example
  
  ```ts
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
  ```
  
  > View on GitHub: https://tsch.js.org/110
*/

/* _____________ Your Code Here _____________ */
/**
 * 知识点：
 * 当使用字符串模板推导的时候，除了最后一个代表剩余的所有字符，前面的每个推导都只代表一个字符
 *
 *
 *
 */
//测试字符模板
type MyTest<T> = T extends `${infer T}${infer F}${infer K}`
  ? `${T}${F}`
  : never;
type aaa = MyTest<'qwe'>; //qw

/**
 * 思路：
 * 通过两个模板匹配字符串，第一个infer T就是第一个字符，第二个infer K就代表剩余的字符
 * 只要将T变成大写，拼接上剩余的字符K即可
 * 转大写可以使用UpperCase，也可以自己定义个map实现转换
 *
 */

type map = {
  f: 'F';
  a: 'A';
};
type Capitalize<S extends string> = S extends `${infer T}${infer K}`
  ? `${T extends keyof map ? map[T] : T}${K}`
  : S;

type test3 = Capitalize<'fOOBAR'>;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Capitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capitalize<'aoo bar'>, 'Aoo bar'>>,
  Expect<Equal<Capitalize<''>, ''>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/110/answer
  > View solutions: https://tsch.js.org/110/solutions
  > More Challenges: https://tsch.js.org
*/

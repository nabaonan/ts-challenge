/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`
  
  For example
  
  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
  ```
  
  > View on GitHub: https://tsch.js.org/116
*/

/* _____________ Your Code Here _____________ */

// type tmpl = `${infer T}${From}`

/**
 * 思路：
 *
 * From 为空的时候要返回原本的字符串  所以要这样判断 From extends '' ? S
 * 由于replace只替换第一个遇到的字符，之后在遇到相同的字符则不再替换，所以要推导出匹配字符串前后都是什么字符，
 * 之后用推导出的字符中间加上要替换的字符返回即可
 *
 */

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer T}${From}${infer F}`
  ? `${T}${To}${F}`
  : S;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type test = Replace<'foobar', 'bar', 'foo'>;
type test2 = Replace<'foobarbar', 'bar', 'foo'>;
type test3 = Replace<'foobarbar', 'bra', 'foo'>;
type test4 = Replace<'foobarbar', '', 'foo'>;
type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/116/answer
  > View solutions: https://tsch.js.org/116/solutions
  > More Challenges: https://tsch.js.org
*/

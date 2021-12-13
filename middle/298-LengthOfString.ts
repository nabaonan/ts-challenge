/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal
  
  ### Question
  
  Compute the length of a string literal, which behaves like `String#length`.
  
  > View on GitHub: https://tsch.js.org/298
*/


/* _____________ Your Code Here _____________ */
/**
 * 思路：
 * 要想求出字符串长度，需要将字符串转换为数组，再通过A['length']取得数组长度
 * 引入一个数组参数，默认是空数组，记录转换后的字符
 * 
 * 遍历字符串字符 通过字面量模板，可以取得字符串的第一个字符F和剩余的字符串L
 * 递归调用方法，将剩余的字符串当做第一个参数传入，将第一个字符F追加到数组
 * 递归终止时返回数组的长度
 */
  

type LengthOfString<S extends string, A extends string[] = []> = S extends `${infer F}${infer L}` ? LengthOfString<L,[F,...A] >: A['length']


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type test = LengthOfString<''>

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/


/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #easy #promise
  
  ### Question
  
  If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have `Promise<ExampleType>` how to get ExampleType?

  如果我们有一个类型是包装类型的承诺。我们怎样才能得到包装类型中的类型？例如，如果我们有 Promise <ExampleType> 如何获得 ExampleType？
  
  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)
  
  > View on GitHub: https://tsch.js.org/189
*/

/* _____________ Your Code Here _____________ */

//只有在条件语句中才能使用infer ，infer K 代表推断当前类型，并将推断出的类型赋值给一个变量K
type Awaited<T extends Promise<any>> = T extends Promise<infer K> ? K : never;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type t = Awaited<X>;

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>
];

// @ts-expect-error
type error = Awaited<number>;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/189/answer
  > View solutions: https://tsch.js.org/189/solutions
  > More Challenges: https://tsch.js.org
*/

/*
  296 - Permutation
  -------
  by Naoto Ikuno (@pandanoir) #medium #union
  
  ### Question
  
  Implement permutation type that transforms union types into the array that includes permutations of unions.
  实现将联合类型转换为包含联合排列的数组的排列类型。
  ```typescript
  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
  ```
  
  > View on GitHub: https://tsch.js.org/296
*/

/* _____________ Your Code Here _____________ */

/**
 * 知识点：
 * 迭代一个联合类型   就用联合类型  extends  infer F ，这个F就是联合类型中每个类型
 * 当只有一个参数的时候，需要将这个参数赋值给另外一个泛型C 则用Permutation<T,C = T>
 * 
 * 递归时候
 * 
 */

type test = 'A' | 'B' | 'C';
type P<T> = T extends infer F ? [F] : []; //
type test3 = P<test>; //["A"] | ["B"] | ["C"]

type Permutation<T,C = T> = [T] extends [never]
  ? []
  : T extends infer F
  ? [F, ...Permutation<Exclude<C, F>>]//调用递归的时候需要使用T的克隆变量，怀疑是因为前面用T推导了所以后面递归不能再用？？？？
  : [];

type test2 = Permutation<'A' | 'B' | 'C'>;
/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<
    Equal<
      Permutation<'A' | 'B' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  Expect<
    Equal<
      Permutation<'B' | 'A' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  Expect<Equal<Permutation<never>, []>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/296/answer
  > View solutions: https://tsch.js.org/296/solutions
  > More Challenges: https://tsch.js.org
*/


/**
 * 参考
 * https://github.com/ghaiklor/type-challenges-solutions/blob/main/en/medium-permutation.md
 * 可参考https://github.com/type-challenges/type-challenges/issues/2551
 */
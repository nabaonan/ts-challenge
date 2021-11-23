/*
  9 - 深度 Readonly
  -------
  by Anthony Fu (@antfu) #中等 #readonly #object-keys #deep
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  实现一个通用的`DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。
  
  您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。
  
  例如
  
  ```ts
  type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }
  
  type Expected = { 
    readonly x: { 
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey' 
  }
  
  const todo: DeepReadonly<X> // should be same as `Expected`
  ```
  
  > 在 Github 上查看：https://tsch.js.org/9/zh-CN
*/

/* _____________ 你的代码 _____________ */

//问题，如何将第一层的类型首先弄对，现在a的类型总是空对象

/**
 思路：只有是对象形式才会递归生成，
 * T是一个对象类型，如果是对象，则返回一个对象类型，不是返回never
 判断T的属性的值是否是对象类型，如果他的值是对象类型Record<string,unknown>则值的类型应该是递归后的结果DeepReadonly<T[key]>，否则他应该是当前值的类型T[key]
 */

type DeepReadonly<T> = T extends Record<string, unknown>
  ? {
      readonly [key in keyof T]: T[key] extends Record<string, unknown>
        ? DeepReadonly<T[key]>
        : T[key];
    }
  : never;

type TTT = DeepReadonly<X>;

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
    };
  };
};

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/9/answer/zh-CN
  > 查看解答：https://tsch.js.org/9/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

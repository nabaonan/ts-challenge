/*
  8 - Readonly 2
  -------
  by Anthony Fu (@antfu) #medium #readonly #object-keys
  
  ### Question
  
  Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.
  
  `K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.
  K是指定的属性设置为只读，如果不提供K 则将全部属性设置为只读

  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```
  
  > View on GitHub: https://tsch.js.org/8
*/

/* _____________ Your Code Here _____________ */

/**
 * 要点：
 * 1. 参数获取默认值 如果K不传需要给他设置默认值，默认值的方法类似es6的
 * K extends keyof T = keyof T（这个是默认值）
 * 2. 设置完特定的属性为readonly后需要和原有的属性进行交叉，以便加上没有设置只读的属性
 * 3. 只读属性和已有的属性进行交叉，相同的属性还是只读的
 */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key];
} & T;
type test = MyReadonly2<Todo1, 'title' | 'description'>;

type read = {
  readonly a: string;
};

type noread = {
  a: string;
};

type merge = read & noread;

const c: merge = {
  a: '123',
};

// c.a = '123'  提示只读不能赋值

/* _____________ Test Cases _____________ */
import { Alike, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8/answer
  > View solutions: https://tsch.js.org/8/solutions
  > More Challenges: https://tsch.js.org
*/

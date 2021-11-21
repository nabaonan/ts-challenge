/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in
  
  ### Question
  
  Implement the built-in `Pick<T, K>` generic without using it.
  
  Constructs a type by picking the set of properties `K` from `T`
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```
  
  > View on GitHub: https://tsch.js.org/4
*/

/* _____________ Your Code Here _____________ */

/**
 * 1 先取出目标的key名称，当做K
 * 2 K有可能是多个，所以真正的key值应该属于K中的一个 key in K
 *
 *  */
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type t = MyPick<Todo, 'title'>;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

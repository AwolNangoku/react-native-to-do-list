import {Todo} from './types';

const listTodos = () => ({
  type: 'LIST_TODOS',
});

const findTodo = (payload: string) => ({
  type: 'FIND_TODO',
  payload,
});

const addToDo = (payload: Todo) => ({
  type: 'ADD_TO_DO',
  payload,
});

const removeToDo = (payload: string) => ({
  type: 'REMOVE_TO_DO',
  payload,
});

export {listTodos, addToDo, removeToDo, findTodo};

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

const editToDoItem = (payload: {id: string; todoItem: Todo}) => ({
  type: 'EDIT_TO_DO',
  payload,
});

const saveToDoItem = (payload: Todo) => ({
  type: 'SAVE_TO_DO',
  payload,
});

export {listTodos, addToDo, removeToDo, findTodo, editToDoItem, saveToDoItem};

import {Todo} from './types';

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

export {addToDo, removeToDo, editToDoItem, saveToDoItem};

// @ts-ignore
import {createAction} from '@reduxjs/toolkit';

const listTodos = createAction('LIST_TODOS');

const findTodo = createAction('FIND_TODO');

const addToDo = createAction('ADD_TO_DO');

const removeToDo = createAction('REMOVE_TO_DO');

export {listTodos, addToDo, removeToDo, findTodo};

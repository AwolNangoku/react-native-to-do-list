// @ts-ignore
import {createReducer} from '@reduxjs/toolkit';
import {listTodos, addToDo, removeToDo, findTodo} from './actions';
import {Todo} from './types';

const initialState: Todo[] = [];

const todosList = createReducer(initialState, {
  [listTodos]: (state) => state,
  [addToDo]: (state, action) => [...state, action.payload],
  [removeToDo]: (state, action) =>
    state.filter(
      (todo) =>
        todo.name !== action.payload.name &&
        todo.description !== action.payload.description,
    ),
  [findTodo]: (state, action) =>
    state.filter(
      (todo) =>
        todo.name === action.payload.name &&
        todo.description === action.payload.description,
    )[0],
});

export default todosList;

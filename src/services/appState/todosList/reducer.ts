// @ts-ignore
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  todoItems: [],
};

const todosList = createReducer(initialState, {
  ['LIST_TODOS']: (state) => state,
  ['ADD_TO_DO']: (state, action) => ({
    ...state,
    ...{todoItems: [...state.todoItems, action.payload]},
  }),
  ['REMOVE_TO_DO']: (state, action) => ({
    ...state,
    ...{
      todoItems: state.todoItems.filter(
        (todoItem) => todoItem.id !== action.payload,
      ),
    },
  }),
  ['FIND_TODO']: (state, action) =>
    state.filter(
      (todo) =>
        todo.name === action.payload.name &&
        todo.description === action.payload.description,
    )[0],
});

export default todosList;

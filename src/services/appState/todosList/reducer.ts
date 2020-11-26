// @ts-ignore
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  todoItems: [],
  todoItem: undefined,
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
  ['FIND_TODO']: (state, action) => ({
    ...state,
    ...{
      todoItems: state.todoItems.filter(
        (todoItem) => todoItem.id === action.payload,
      )[0],
    },
  }),
  ['EDIT_TO_DO']: (state, action) => ({
    ...state,
    ...{
      todoItems: state.todoItems.filter(
        (todoItem) => todoItem.id !== action.payload.id,
      ),
      todoItem: action.payload.todoItem,
    },
  }),
  ['SAVE_TO_DO']: (state, action) => ({
    ...state,
    ...{
      todoItems: [...state.todoItems, action.payload],
      todoItem: undefined,
    },
  }),
});

export default todosList;

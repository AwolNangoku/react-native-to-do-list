// @ts-ignore
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  todoItems: [],
  todoItem: undefined,
};

const todosList = createReducer(initialState, {
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
      todoItems: [action.payload, ...state.todoItems],
      todoItem: undefined,
    },
  }),
});

export default todosList;

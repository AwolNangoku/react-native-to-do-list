import {createSelector} from 'reselect';

const todoItemsSelector = (state) => state.todosList;

const todoItems = createSelector(todoItemsSelector, (todos) => todos.todoItems);

export {todoItems};

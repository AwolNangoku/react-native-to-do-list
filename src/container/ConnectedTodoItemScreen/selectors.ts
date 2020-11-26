import {createSelector} from 'reselect';

const itemSelector = (state) => state.todosList;

const todoItem = createSelector(itemSelector, (todos) => todos.todoItem);

export {todoItem};

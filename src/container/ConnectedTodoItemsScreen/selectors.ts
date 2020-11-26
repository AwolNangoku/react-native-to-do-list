import {createSelector} from 'reselect';

const todoItemsSelector = (state) => state.todosList;

const todoItems = createSelector(todoItemsSelector, (todDos) => todDos.todoItems);

export {todoItems};

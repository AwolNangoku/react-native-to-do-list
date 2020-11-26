import {connect, Dispatch, ReduxState} from 'react-redux';
import {Todo} from '../../services/appState/todosList/types';
import {
  addToDo,
  editToDoItem,
  removeToDo,
} from '../../services/appState/todosList/actions';
import {todoItems} from './selectors';
import TodoItemsScreen from '../../presentational/TodoItemsScreen';

const mapStateToProps = (state: ReduxState) => ({
  todoItems: todoItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  addToDoItem: (todoItem: Todo) => dispatch(addToDo(todoItem)),
  removeToDoItem: (itemId: string) => dispatch(removeToDo(itemId)),
  editToDoItem: (todoItem: {id: string; todoItem: Todo}) =>
    dispatch(editToDoItem(todoItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemsScreen);

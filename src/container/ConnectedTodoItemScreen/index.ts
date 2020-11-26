import {connect, Dispatch, ReduxState} from 'react-redux';
import {todoItem} from './selectors';
import {Todo} from '../../services/appState/todosList/types';
import {saveToDoItem} from '../../services/appState/todosList/actions';
import TodoItemScreen from '../../presentational/TodoItemScreen';

const mapStateToProps = (state: ReduxState) => ({
  todoItem: todoItem(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  saveToDoItem: (updatedItem: Todo) => dispatch(saveToDoItem(updatedItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemScreen);

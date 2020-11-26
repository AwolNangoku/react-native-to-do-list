import React from 'react';
// @ts-ignore
import {NativeRouter, Route} from 'react-router-native';
import ConnectedTodoItemsScreen from './container/ConnectedTodoItemsScreen/';
import TodoItemScreen from './presentational/TodoItemScreen';

const App = () => (
  <NativeRouter>
    <Route exact path="/">
      <ConnectedTodoItemsScreen />
    </Route>
    <Route exact path="/todo/:id">
      <TodoItemScreen />
    </Route>
  </NativeRouter>
);

export default App;

import React from 'react';
// @ts-ignore
import {NativeRouter, Route} from 'react-router-native';
import ConnectedTodoItemsScreen from './container/ConnectedTodoItemsScreen/';
import ConnectedTodoItemScreen from './container/ConnectedTodoItemScreen/';

const App = () => (
  <NativeRouter>
    <Route exact path="/">
      <ConnectedTodoItemsScreen />
    </Route>
    <Route exact path="/todo/:id">
      <ConnectedTodoItemScreen />
    </Route>
  </NativeRouter>
);

export default App;

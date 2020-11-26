import React from 'react';
// @ts-ignore
import {NativeRouter, Route} from 'react-router-native';
import TodoItemsScreen from './presentational/TodoItemsScreen';
import TodoItemScreen from './presentational/TodoItemScreen';

const App = () => (
  <NativeRouter>
    <Route exact path="/">
      <TodoItemsScreen
        todoItems={[
          {
            id: 'A1',
            name: 'Stationary',
            description: 'School material for 2021',
            isDone: false,
          },
          {
            id: 'A2',
            name: 'Groceries',
            description: 'Food items for the farewell party 2021',
            isDone: false,
          },
          {
            id: 'A3',
            name: 'Gym',
            description: 'Gym material for 2021',
            isDone: false,
          },
          {
            id: 'A4',
            name: 'Petrol',
            description: 'Get my car full tank  for work next week',
            isDone: false,
          },
          {
            id: 'A5',
            name: 'Services',
            description:
              'Pay my online services for entertainment services so I can watch netflix, listen to music',
            isDone: false,
          },
        ]}
      />
    </Route>
    <Route exact path="/todo/:id">
      <TodoItemScreen />
    </Route>
  </NativeRouter>
);

export default App;

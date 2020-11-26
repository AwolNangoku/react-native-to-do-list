import React, {useState} from 'react';
// @ts-ignore
import {useHistory} from 'react-router-native';

import {Todo} from '../../services/appState/todosList/types';
import RowToDoItem from './components/RowToDoItem';
import ScreenContent from './components/ScreenContent';
import ScreenHeader from './components/ScreenHeader';
import ScreenContainer from './components/ScreenContainer';
import AddItemField from './components/AddItemField';

const TODO_ITEM = {
  id: undefined,
  name: undefined,
  description: undefined,
  isDone: undefined,
};

type Props = {
  todoItems: Todo[];
};

const TodoItemsScreen: React.FC<Props> = ({todoItems}) => {
  const [todoItemName, setToDoItem] = useState(undefined);
  const history = useHistory();

  return (
    <ScreenContainer>
      <ScreenHeader
        headerTitle="Tasks in your to do list"
        itemsCount={todoItems.length}
      />
      <ScreenContent>
        <AddItemField
          setToDoItemName={(itemName) => setToDoItem(itemName)}
          addItemToTodList={() =>
            console.log('Adds item to the list..', {
              ...TODO_ITEM,
              ...{name: todoItemName},
            })
          }
        />
        {todoItems.map(({name, id}, key) => (
          <RowToDoItem
            key={key}
            name={name}
            removeRowItem={() => console.log('Item removed...')}
            viewRowItem={() => history.push(`/todo/${id}`)}
          />
        ))}
      </ScreenContent>
    </ScreenContainer>
  );
};

export default TodoItemsScreen;

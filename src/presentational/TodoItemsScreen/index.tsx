import React, {useState} from 'react';
// @ts-ignore
import {useHistory} from 'react-router-native';

import {Todo} from '../../services/appState/todosList/types';
import RowToDoItem from './components/RowToDoItem';
import ScreenContent from './components/ScreenContent';
import ScreenHeader from './components/ScreenHeader';
import ScreenContainer from './components/ScreenContainer';
import AddItemField from './components/AddItemField';
import {generateItemID} from '../../utils';

const TODO_ITEM = {
  id: undefined,
  name: undefined,
  description: undefined,
  isDone: undefined,
};

type Props = {
  todoItems: Todo[];
  removeToDoItem: (id: string) => void;
  addToDoItem: (todoItem: {
    name: any;
    description: undefined;
    id: string;
    isDone: undefined;
  }) => void;
};

const TodoItemsScreen: React.FC<Props> = ({
  todoItems,
  removeToDoItem,
  addToDoItem,
}) => {
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
          todItemName={todoItemName}
          setToDoItemName={(itemName) => setToDoItem(itemName)}
          addItemToTodList={() => {
            if (todoItemName) {
              addToDoItem({
                ...TODO_ITEM,
                ...{
                  id: generateItemID(),
                  name: todoItemName,
                },
              });
              setToDoItem(undefined);
            }
          }}
        />
        {todoItems.map(({name, id}, key) => (
          <RowToDoItem
            key={key}
            name={name}
            removeRowItem={() => removeToDoItem(id)}
            viewRowItem={() => history.push(`/todo/${id}`)}
          />
        ))}
      </ScreenContent>
    </ScreenContainer>
  );
};

export default TodoItemsScreen;

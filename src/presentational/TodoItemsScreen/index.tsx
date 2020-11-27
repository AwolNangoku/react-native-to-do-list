import React, {useState} from 'react';
// @ts-ignore
import {useHistory} from 'react-router-native';

import {Todo} from '../../services/appState/todosList/types';
import RowToDoItem from './components/RowToDoItem';
import ScreenContent from './components/ScreenContent';
import ScreenHeader from './components/ScreenHeader';
import ScreenContainer from './components/ScreenContainer';
import AddItemField from './components/AddItemField';
import {generateItemID, sharingContent} from '../../utils';
import ShareButton from '../screenComponents/Buttons/ShareButton';

const TODO_ITEM = {
  id: undefined,
  title: undefined,
  description: undefined,
  isDone: undefined,
};

type Props = {
  todoItems: Todo[];
  removeToDoItem: (id: string) => void;
  editToDoItem: (todoItem: {id: string; todoItem: Todo}) => void;
  addToDoItem: (todoItem: {
    title: any;
    description: undefined;
    id: string;
    isDone: undefined;
  }) => void;
};

const TodoItemsScreen: React.FC<Props> = ({
  todoItems,
  removeToDoItem,
  addToDoItem,
  editToDoItem,
}) => {
  const [todoItemTitle, setToDoItemTitle] = useState(undefined);

  const history = useHistory();
  return (
    <ScreenContainer>
      <ScreenHeader
        headerTitle="Tasks in your to do list"
        itemsCount={todoItems.length}
      />
      <ShareButton
        buttonTitle="Share Items"
        sharingContent={sharingContent(todoItems)}
        isDisabled={todoItems.length === 0}
      />

      <AddItemField
        todoItemTitle={todoItemTitle}
        setToDoItemTitle={(itemTitle) => setToDoItemTitle(itemTitle)}
        addItemToTodList={() => {
          if (todoItemTitle) {
            addToDoItem({
              ...TODO_ITEM,
              ...{
                id: generateItemID(),
                title: todoItemTitle,
              },
            });
            setToDoItemTitle(undefined);
          }
        }}
      />

      <ScreenContent>
        {todoItems.map(({title, id}, key) => (
          <RowToDoItem
            key={key}
            title={title}
            removeRowItem={() => removeToDoItem(id)}
            viewRowItem={() => {
              const todoItem = todoItems.filter(
                (todoItem) => todoItem.id === id,
              )[0];

              editToDoItem({id, todoItem});
              history.push(`/todo/${id}`);
            }}
          />
        ))}
      </ScreenContent>
    </ScreenContainer>
  );
};

export default TodoItemsScreen;

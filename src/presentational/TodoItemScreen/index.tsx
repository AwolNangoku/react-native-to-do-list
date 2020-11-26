import React, {useState} from 'react';
// @ts-ignore
import {useHistory, useParams} from 'react-router-native';
import ScreenContainer from './components/ScreenContainer';
import ScreenHeader from './components/ScreenHeader';
import ScreenContent from './components/ScreenContent';
import ContentHeader from './components/ContentHeader';
import ContentDescription from './components/ContentDescription';
import ActionsContainer from './components/ActionsContainer';
import ItemAction from './components/ItemAction';
import DescriptionField from './components/DescriptionField';
import {Todo} from '../../services/appState/todosList/types';

type Props = {
  todoItem: Todo;
  saveToDoItem: (todoItem: Todo) => void;
};

const TodoItemScreen: React.FC<Props> = ({todoItem, saveToDoItem}) => {
  const [description, setDescription] = useState(todoItem.description);
  const history = useHistory();
  const {id} = useParams();

  return (
    <ScreenContainer>
      <ScreenHeader headerTitle="Update To do" />
      <ScreenContent>
        <ContentHeader title={todoItem.name} />

        <ContentDescription description={todoItem.description} />

        <DescriptionField
          updateDescription={(description) => setDescription(description)}
        />

        <ActionsContainer>
          <ItemAction
            actionTitle="Edit description"
            itemAction={() => console.log('Editing To-do description...', id)}
          />

          <ItemAction
            actionTitle="Save description"
            itemAction={() => {
              saveToDoItem({
                ...todoItem,
                ...{
                  isDone: description ? true : false,
                  description,
                },
              });
              history.push('/');
            }}
          />
        </ActionsContainer>
      </ScreenContent>
    </ScreenContainer>
  );
};

export default TodoItemScreen;

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
  const [description, setDescription] = useState(undefined);
  const history = useHistory();

  return (
    <ScreenContainer>
      <ScreenHeader headerTitle="Update To do" />
      <ScreenContent>
        <ContentHeader title={todoItem.title} />

        <ContentDescription description={todoItem.description} />

        <DescriptionField
          description={description}
          updateDescription={(description) => setDescription(description)}
        />

        <ActionsContainer>
          <ItemAction actionTitle="Back" itemAction={() => history.push('/')} />

          <ItemAction
            actionTitle="Save todo"
            itemAction={() => {
              if (description) {
                saveToDoItem({
                  ...todoItem,
                  ...{
                    isDone: description ? true : false,
                    description,
                  },
                });
                setDescription(undefined);
              }
            }}
          />
        </ActionsContainer>
      </ScreenContent>
    </ScreenContainer>
  );
};

export default TodoItemScreen;

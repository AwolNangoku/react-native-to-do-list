import React from 'react';
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

const TodoItemScreen: React.FC = () => {
  const history = useHistory();
  const {id} = useParams();
  return (
    <ScreenContainer>
      <ScreenHeader headerTitle="Currently viewing your to do item" />
      <ScreenContent>
        <ContentHeader title="To do item name here..." />

        <ContentDescription
          description="Description fopr the todo item blah blah blah item blah blah blah
            item blah blah blah item blah blah blah....."
        />

        <ActionsContainer>
          <ItemAction
            actionTitle="Edit description"
            itemAction={() => console.log('Editing description...', id)}
          />

          <ItemAction
            actionTitle="Save description"
            itemAction={() => {
              console.log('Saving description...', id);
              history.push('/');
            }}
          />
        </ActionsContainer>

        <DescriptionField
          updateDescription={() =>
            console.log('Updating item description...', id)
          }
        />
      </ScreenContent>
    </ScreenContainer>
  );
};

export default TodoItemScreen;

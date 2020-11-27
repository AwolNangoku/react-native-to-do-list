import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Todo} from '../../../../services/appState/todosList/types';

type Props = {
  todoItemTitle?: string;
  setToDoItemTitle: (itemTitle: string) => void;
  addItemToTodList: (item: Todo) => void;
};

const AddItemField: React.FC<Props> = ({
  todoItemTitle,
  setToDoItemTitle,
  addItemToTodList,
}) => (
  <View style={{padding: 20}}>
    <Text>Enter item title:</Text>
    <TextInput
      placeholder="Item title"
      onChangeText={setToDoItemTitle}
      value={todoItemTitle}
    />
    <Button title="Add item" onPress={addItemToTodList} />
  </View>
);

export default AddItemField;

import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Todo} from '../../../../services/appState/todosList/types';

type Props = {
  todItemName?: string;
  setToDoItemName: (itemName: string) => void;
  addItemToTodList: (item: Todo) => void;
};

const AddItemField: React.FC<Props> = ({
  todItemName,
  setToDoItemName,
  addItemToTodList,
}) => (
  <View style={{padding: 10}}>
    <View>
      <View>
        <Text>Enter item name:</Text>
        <TextInput
          placeholder="Enter list item name here..."
          onChangeText={setToDoItemName}
          value={todItemName}
        />
      </View>
      <View>
        <Button title="Add item" onPress={addItemToTodList} />
      </View>
    </View>
  </View>
);

export default AddItemField;

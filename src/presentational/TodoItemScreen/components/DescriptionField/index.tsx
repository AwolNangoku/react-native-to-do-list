import React from 'react';
import {View, TextInput, Text} from 'react-native';

type Props = {
  updateDescription: (description: string) => void;
};
const DescriptionField: React.FC<Props> = ({updateDescription}) => (
  <View style={{borderRadius: 2, padding: 10}}>
    <Text>Enter description:</Text>
    <TextInput
      onChangeText={updateDescription}
      placeholder="Item description..."
      style={{borderRadius: 2}}
    />
  </View>
);

export default DescriptionField;

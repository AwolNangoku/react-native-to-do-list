import React from 'react';
import {View, TextInput, Text} from 'react-native';

type Props = {
  description?: string;
  updateDescription: (description: string) => void;
};
const DescriptionField: React.FC<Props> = ({
  description,
  updateDescription,
}) => (
  <View style={{borderRadius: 2, padding: 10}}>
    <Text>Enter description:</Text>
    <TextInput
      onChangeText={updateDescription}
      placeholder="Item description..."
      style={{borderRadius: 2}}
      value={description}
    />
  </View>
);

export default DescriptionField;

import React from 'react';
import {View, TextInput} from 'react-native';

type Props = {
  updateDescription: (description: string) => void;
};
const DescriptionField: React.FC<Props> = ({updateDescription}) => (
  <View style={{borderRadius: 2}}>
    <TextInput
      onChangeText={updateDescription}
      placeholder="Add details about the to do item"
      style={{borderColor: 'red', borderRadius: 2}}
    />
  </View>
);

export default DescriptionField;

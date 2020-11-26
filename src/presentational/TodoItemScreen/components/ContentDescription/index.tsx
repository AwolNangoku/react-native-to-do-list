import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  description?: string;
};

const ContentDescription: React.FC<Props> = ({description}) => (
  <View style={{padding: 10}}>
    <Text>{description}</Text>
  </View>
);

export default ContentDescription;

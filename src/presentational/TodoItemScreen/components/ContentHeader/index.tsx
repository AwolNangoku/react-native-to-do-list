import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  title?: string;
};
const ContentHeader: React.FC<Props> = ({title}) => (
  <View style={{padding: 10}}>
    <Text>{title}</Text>
  </View>
);
export default ContentHeader;

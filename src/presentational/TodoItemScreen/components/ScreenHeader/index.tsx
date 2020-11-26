import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  headerTitle: string;
};
const ScreenHeader: React.FC<Props> = ({headerTitle}) => (
  <View style={{padding: 10}}>
    <Text>{headerTitle}</Text>
  </View>
);

export default ScreenHeader;

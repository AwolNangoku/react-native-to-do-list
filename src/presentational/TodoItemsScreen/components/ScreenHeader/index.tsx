import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  headerTitle: string;
  itemsCount: number;
};

const ScreenHeader: React.FC<Props> = ({headerTitle, itemsCount}) => (
  <View style={{padding: 20}}>
    <Text>{`${headerTitle}...${itemsCount}`}</Text>
  </View>
);

export default ScreenHeader;

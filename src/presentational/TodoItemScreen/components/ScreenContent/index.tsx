import React from 'react';
import {View} from 'react-native';

const ScreenContent: React.FC = ({children}) => (
  <View style={{padding: 10}}>{children}</View>
);

export default ScreenContent;

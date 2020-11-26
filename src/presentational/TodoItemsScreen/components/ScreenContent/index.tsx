import React from 'react';
import {View} from 'react-native';

const ScreenContent: React.FC = ({children}) => (
  <View style={{padding: 20}}>{children}</View>
);

export default ScreenContent;

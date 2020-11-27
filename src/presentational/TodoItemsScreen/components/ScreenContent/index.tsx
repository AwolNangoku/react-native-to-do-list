import React from 'react';
import {ScrollView} from 'react-native';

const ScreenContent: React.FC = ({children}) => (
  <ScrollView>{children}</ScrollView>
);

export default ScreenContent;

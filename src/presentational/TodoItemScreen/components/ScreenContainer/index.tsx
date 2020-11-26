import React from 'react';
import {View} from 'react-native';

const ScreenContainer: React.FC = ({children}) => (
  <View
    style={{
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    {children}
  </View>
);

export default ScreenContainer;

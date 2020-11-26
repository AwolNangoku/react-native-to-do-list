import React from 'react';
import {View} from 'react-native';

const ActionsContainer: React.FC = ({children}) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    }}>
    {children}
  </View>
);

export default ActionsContainer;

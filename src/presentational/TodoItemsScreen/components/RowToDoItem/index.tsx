import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

type Props = {
  name: string;
  removeRowItem: () => GestureResponderEvent | void;
  viewRowItem: () => GestureResponderEvent | void;
};

const RowToDoItem: React.FC<Props> = ({name, removeRowItem, viewRowItem}) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <View style={{padding: 20, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{name && name.toUpperCase()}</Text>
    </View>
    <View
      style={{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={removeRowItem}>
        <Text style={{color: '#ff3100'}}>Delete</Text>
      </TouchableOpacity>
    </View>
    <View style={{padding: 20, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={viewRowItem}>
        <Text style={{color: '#00a8fd'}}>Edit details</Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default RowToDoItem;

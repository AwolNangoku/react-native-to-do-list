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
  <View style={{display: 'flex', flexDirection: 'row'}}>
    <View style={{padding: 20, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{name.toUpperCase()}</Text>
    </View>
    <View
      style={{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={removeRowItem}>
        <Text>x</Text>
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

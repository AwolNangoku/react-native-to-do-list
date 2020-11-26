import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type Props = {
  actionTitle: string;
  itemAction: () => void;
};
const ItemAction: React.FC<Props> = ({actionTitle, itemAction}) => (
  <View style={{padding: 10}}>
    <TouchableOpacity onPress={itemAction}>
      <View>
        <Text
          style={{
            color: actionTitle === 'Save description' ? '#00a8fd' : undefined,
          }}>
          {actionTitle}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default ItemAction;

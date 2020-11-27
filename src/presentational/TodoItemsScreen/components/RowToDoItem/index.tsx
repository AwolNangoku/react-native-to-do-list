import React from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {Container, NameContainer, ActionContainer} from './styled';

type Props = {
  title: string;
  removeRowItem: () => GestureResponderEvent | void;
  viewRowItem: () => GestureResponderEvent | void;
};

type ActionProps = {
  actionTitle: string;
  titleColor: string;
  action: () => void;
};

const RowItemAction: React.FC<ActionProps> = ({
  actionTitle,
  titleColor,
  action,
}) => (
  <ActionContainer>
    <TouchableOpacity onPress={action}>
      <Text style={{color: titleColor}}>{actionTitle}</Text>
    </TouchableOpacity>
  </ActionContainer>
);

const RowToDoItem: React.FC<Props> = ({title, removeRowItem, viewRowItem}) => (
  <Container>
    <NameContainer>
      <Text>{title && title.toUpperCase()}</Text>
    </NameContainer>

    <RowItemAction
      actionTitle="Delete"
      titleColor="#ff3100"
      action={removeRowItem}
    />

    <RowItemAction
      actionTitle="Edit details"
      titleColor="#00a8fd"
      action={viewRowItem}
    />
  </Container>
);
export default RowToDoItem;

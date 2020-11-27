import React from 'react';
import {Share, Button} from 'react-native';

type Props = {
  buttonTitle: string;
  sharingContent: string;
};
const ShareButton: React.FC<Props> = ({sharingContent, buttonTitle}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: sharingContent,
      });
      if (result.action === Share.sharedAction) {
        console.log('Content shared successfully');
      } else if (result.action === Share.dismissedAction) {
        console.log('Sharing content dismissed');
      }
    } catch (error) {
      console.log('Failed sharing content');
    }
  };
  return <Button onPress={onShare} title={buttonTitle} />;
};

export default ShareButton;

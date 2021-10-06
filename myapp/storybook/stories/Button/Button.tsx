import React from 'react';
import {TouchableHighlight} from 'react-native';
import {Text} from 'react-native';
import styles from './Button.style';

interface IButtonProps {
  onPress: () => void;
}

export const Button = ({onPress}: IButtonProps) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text>hi</Text>
    </TouchableHighlight>
  );
};

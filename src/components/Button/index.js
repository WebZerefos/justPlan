import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const Button = ({onPress, type, children, style}) => {
  return (
    <TouchableOpacity
      style={[styles.container, type === 'blue' ? styles.blueBg : {}, style]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);

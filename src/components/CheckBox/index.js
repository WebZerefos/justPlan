import {View, Pressable} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const CheckBox = ({checked, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, checked ? styles.checkedBox : {}]}>
      {checked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
};

export default memo(CheckBox);

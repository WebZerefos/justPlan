import {TextInput} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import colors from '../../constants/colors';

const Input = ({...props}) => {
  return (
    <TextInput
      placeholderTextColor={colors.grey}
      style={styles.input}
      {...props}
    />
  );
};

export default memo(Input);

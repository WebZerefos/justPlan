import {TextInput} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import colors from '../../constants/colors';

const Input = ({type, ...props}) => {
  return (
    <TextInput
      placeholderTextColor={colors.grey}
      style={[styles.input, type === 'outline' ? styles.outline : {}]}
      {...props}
    />
  );
};

export default memo(Input);

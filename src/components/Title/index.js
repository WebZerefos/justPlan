import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

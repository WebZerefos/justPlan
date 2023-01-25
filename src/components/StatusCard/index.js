import {Text, Pressable} from 'react-native';
import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const StatusCard = ({label, count}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Tasks');
  };

  return (
    <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.count}>{count}</Text>
    </Pressable>
  );
};

export default memo(StatusCard);

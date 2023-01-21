import {Text, Pressable} from 'react-native';
import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const PlusIcon = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('AddTask');
  };

  return (
    <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  );
};

export default memo(PlusIcon);

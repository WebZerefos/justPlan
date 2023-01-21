import {Text, SafeAreaView, Pressable, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const AddTask = ({navigation}) => {
  const handleback = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleback}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
      <Text>AddTask</Text>
    </SafeAreaView>
  );
};

export default memo(AddTask);

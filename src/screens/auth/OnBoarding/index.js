import {View, Text, Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import Button from '../../../components/Button';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={styles.image}
          source={require('../../../assets/onboarding2.jpeg')}
        />
        <View style={styles.footer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your tasks and boost your
          productivity.
        </Text>
        <Button onPress={() => navigation.navigate('SignIn')}>Log in</Button>
        <Button type={'blue'} onPress={() => navigation.navigate('SignUp')}>
          Get started
        </Button>
      </View>
    </View>
  );
};

export default memo(Onboarding);

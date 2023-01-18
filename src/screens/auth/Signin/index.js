import {View, Text, TextInput, SafeAreaView} from 'react-native';
import React, {memo} from 'react';
import Button from '../../../components/Button';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back</Title>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Button>Sign In</Button>

      <Text style={styles.footerText}>
        Not registered?<Text style={styles.footerLink}> Sign up!</Text>
      </Text>
    </SafeAreaView>
  );
};

export default memo(SignUp);

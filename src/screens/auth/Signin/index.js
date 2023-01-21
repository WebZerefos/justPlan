import {Text, SafeAreaView, ScrollView} from 'react-native';
import React, {memo, useState} from 'react';
import auth from '@react-native-firebase/auth';

import Button from '../../../components/Button';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

const SignIn = ({navigation}) => {
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    setValues(vals => ({...vals, [key]: value}));
  };

  const onSubmit = () => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Title>Welcome back</Title>
        <Input
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={val => onChange(val, 'email')}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          onChangeText={val => onChange(val, 'password')}
        />
        <Button onPress={onSubmit}>Sign In</Button>

        <Text style={styles.footerText}>
          Not registered?
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('SignUp')}>
            {' '}
            Sign up!
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(SignIn);

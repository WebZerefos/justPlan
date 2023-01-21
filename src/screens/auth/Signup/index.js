import React, {memo, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import styles from './styles';
import CheckBox from '../../../components/CheckBox';
import {
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '../../../constants/links';

const SignUp = ({navigation}) => {
  const [agree, setAgree] = useState(false);
  const [values, setValues] = useState({});

  const onAgreePress = () => {
    setAgree(value => !value);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const onChange = (value, key) => {
    setValues(vals => ({...vals, [key]: value}));
  };

  const onSubmit = () => {
    if (!values.first_name || !values.last_name) {
      Alert.alert('Please fill all the required fields');
      return;
    }

    if (values.password !== values.confirm_password) {
      Alert.alert('Passwords do not match');
      return;
    }

    if (!agree) {
      Alert.alert('You should agree to the terms');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        auth().currentUser.updateProfile({
          displayName: `${values.first_name} ${values.last_name}`,
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Join the hub!</Title>
        <Input
          onChangeText={val => onChange(val, 'first_name')}
          placeholder="First name"
        />
        <Input
          onChangeText={val => onChange(val, 'last_name')}
          placeholder="Last name"
        />
        <Input
          onChangeText={val => onChange(val, 'email')}
          keyboardType="email-address"
          placeholder="Email"
        />
        <Input
          onChangeText={val => onChange(val, 'password')}
          secureTextEntry
          placeholder="Password"
        />
        <Input
          onChangeText={val => onChange(val, 'confirm_password')}
          secureTextEntry
          placeholder="Confirm Password"
        />

        <View style={styles.row}>
          <CheckBox checked={agree} onPress={onAgreePress} />
          <Text style={styles.agreeText}>
            {' '}
            I agree to{' '}
            <Text
              style={styles.link}
              onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text
              style={styles.link}
              onPress={() => onLinkPress(TERMS_AND_CONDITIONS_LINK)}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        <Button type="blue" onPress={onSubmit}>
          Create account
        </Button>

        <Text style={styles.footerText}>
          Already registered?
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('SignIn')}>
            {' '}
            Sign In!
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(SignUp);

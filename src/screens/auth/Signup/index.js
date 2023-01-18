import {View, Text, SafeAreaView, Linking} from 'react-native';
import React, {memo, useState} from 'react';
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

  const onAgreePress = () => {
    setAgree(value => !value);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input keyboardType="email-address" placeholder="Email" />
      <Input secureTextEntry placeholder="Password" />
      <Input secureTextEntry placeholder="Confirm Password" />

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

      <Button type="blue">Create account</Button>

      <Text style={styles.footerText}>
        Already registered?
        <Text
          style={styles.footerLink}
          onPress={() => navigation.navigate('SignIn')}>
          {' '}
          Sign In!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default memo(SignUp);

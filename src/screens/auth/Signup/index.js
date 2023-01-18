import {View, Text} from 'react-native';
import React, {memo} from 'react';
import Button from '../../../components/Button';

const SignIn = () => {
  return (
    <View>
      <Button>Sign In</Button>
    </View>
  );
};

export default memo(SignIn);

import {DrawerContentScrollView} from '@react-navigation/drawer';
import React, {memo} from 'react';
import auth from '@react-native-firebase/auth';
import {Text, StyleSheet, Linking} from 'react-native';
import colors from '../../constants/colors';

import {
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '../../constants/links';

const DrawerContent = props => {
  const onLogOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <DrawerContentScrollView {...props}>
      <Text
        style={styles.link}
        onPress={() => props.navigation.navigate('Home')}>
        Home
      </Text>
      <Text
        style={styles.link}
        onPress={() => props.navigation.navigate('Tasks')}>
        Tasks
      </Text>
      <Text
        style={styles.link}
        onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
        Privacy Policy
      </Text>
      <Text
        style={styles.link}
        onPress={() => onLinkPress(TERMS_AND_CONDITIONS_LINK)}>
        Terms and Conditions
      </Text>
      <Text style={styles.link} onPress={onLogOut}>
        Logout
      </Text>
    </DrawerContentScrollView>
  );
};

export default memo(DrawerContent);

const styles = StyleSheet.create({
  link: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 13,
    margin: 8,
    marginHorizontal: 30,
  },
});

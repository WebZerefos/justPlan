/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

import OnBoarding from './screens/auth/OnBoarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import Home from './screens/app/Home';
import Tasks from './screens/app/Tasks';
import AddTask from './screens/app/AddTask';
import DrawerContent from './components/DrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{tabBarShowLabel: false, headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('./assets/home-active.png')
                    : require('./assets/home.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('./assets/calendar-active.png')
                    : require('./assets/calendar.png')
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  if (user) {
    return (
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={Signin} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
};

export default memo(Routes);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

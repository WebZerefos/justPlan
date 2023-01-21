import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {memo} from 'react';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Home);

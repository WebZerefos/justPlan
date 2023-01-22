import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {memo} from 'react';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import styles from './styles';
import Title from '../../../components/Title';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Home);

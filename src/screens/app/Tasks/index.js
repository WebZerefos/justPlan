import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {memo} from 'react';
import Header from '../../../components/Header';
import styles from './styles';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />
      <ScrollView>
        <Title type="thin">To Do Tasks</Title>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Tasks);

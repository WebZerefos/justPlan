import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {memo, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import styles from './styles';
import Title from '../../../components/Title';
import {setTasks} from '../../../store/tasks';
import Tasks from '../Tasks';
import StatusCard from '../../../components/StatusCard';

const Home = () => {
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);
  const dispatch = useDispatch();

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user?.uid)
      .get()
      .then(querySnapshot => {
        const tasksList = [];

        querySnapshot.forEach(documentSnapshot => {
          tasksList.push({
            uid: documentSnapshot.id,
            ...(documentSnapshot.data() || {}),
          });
        });

        dispatch(setTasks(tasksList));
      });
  }, [user, toUpdate, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
        <View style={styles.row}>
          <StatusCard label={'High Priority'} count={3} />
          <StatusCard label={'Due DeadLine'} count={3} />
          <StatusCard label={'Quick Win'} count={3} />
        </View>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default memo(Home);

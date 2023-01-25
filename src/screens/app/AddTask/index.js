import {
  Text,
  SafeAreaView,
  Pressable,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {memo, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {setToUpdate} from '../../../store/tasks';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import {categories} from '../../../constants/categories';
import DateInput from '../../../components/DateInput';
import Button from '../../../components/Button';

import styles from './styles';

const AddTask = ({navigation}) => {
  const user = useSelector(state => state.user.data);
  const [category, setCategory] = useState();
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleback = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    const today = moment().format('YYYY-MM-DD');
    const deadLine = moment(date).format('YYYY-MM-DD');

    if (!title) {
      Alert.alert('Title is required');
      return;
    }
    if (moment(deadLine).isBefore(today)) {
      Alert.alert('Please enter future date.');
      return;
    }

    setLoading(true);

    firestore()
      .collection('Tasks')
      .add({
        title,
        date,
        category,
        checked: false,
        userId: user?.uid,
      })
      .then(() => {
        setLoading(false);
        dispatch(setToUpdate());
        navigation.navigate('Tasks');
        setTitle('');
        setDate(new Date());
        setCategory(null);
      })
      .catch(e => {
        console.log('error when adding task :>> ', e);
        setLoading(false);
        Alert.alert(e.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleback}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
      <ScrollView>
        <Title type="thin">Add New Task</Title>
        <Text style={styles.label}>Describe the task</Text>
        <Input
          type="outline"
          placeholder="Type here..."
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Type</Text>
        <Categories
          categories={categories}
          selectedCategory={category}
          onCategoryPress={setCategory}
        />

        <Text style={styles.label}>Deadline</Text>
        <DateInput value={date} onChange={setDate} />

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button style={styles.btn} type={'blue'} onPress={onSubmit}>
            Add Task
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(AddTask);

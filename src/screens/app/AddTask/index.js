import {Text, SafeAreaView, Pressable, Image, FlatList} from 'react-native';
import React, {memo, useState} from 'react';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import {categories} from '../../../constants/categories';

const AddTask = ({navigation}) => {
  const [category, setCategory] = useState();

  const handleback = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleback}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
      <Title type="thin">Add New Task</Title>
      <Text style={styles.label}>Describe the task</Text>
      <Input type="outline" placeholder="Type here..." />
      <Text style={styles.label}>Type</Text>
      <Categories
        categories={categories}
        selectedCategory={category}
        onCategoryPress={setCategory}
      />
    </SafeAreaView>
  );
};

export default memo(AddTask);

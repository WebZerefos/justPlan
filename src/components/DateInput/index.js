import {Image, Text, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import moment from 'moment';

const DateInput = ({value, onChange, ...props}) => {
  const [open, setOpen] = useState(false);

  const onDateOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <TouchableOpacity style={styles.outline} onPress={onDateOpen}>
        <Image
          style={styles.icon}
          source={require('../../assets/calendar.png')}
        />
        <Text>{moment(value).format('L') || 'Select Date...'}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={value}
        onConfirm={date => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default memo(DateInput);

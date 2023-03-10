import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderRadius: 10,
    color: colors.black,
    marginVertical: 12,
  },
  outline: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    borderRadius: 10,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.purple,
  },
});

export default styles;

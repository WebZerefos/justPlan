import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 12,
    marginRight: 12,
    width: '30%',
  },
  label: {
    marginBottom: 13,
    fontSize: 10,
    color: colors.blue,
  },
  count: {
    fontSize: 28,
    fontWeight: '500',
    color: colors.blue,
    marginBottom: 8,
  },
});

export default styles;

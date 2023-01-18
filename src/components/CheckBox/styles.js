import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    color: colors.purple,
    borderRadius: 3,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  innerSquare: {
    width: 12,
    height: 12,
    backgroundColor: colors.purple,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default styles;

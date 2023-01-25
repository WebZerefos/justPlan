import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  outline: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 10,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
    marginLeft: 12,
  },
});

export default styles;

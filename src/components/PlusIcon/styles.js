import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: 100,
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  plus: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '500',
    marginTop: -2,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 15,
    color: colors.grey,
    textAlign: 'center',
    marginBottom: 40,
  },
  footer: {
    position: 'absolute',
    height: 50,
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    bottom: 0,
  },
});

export default styles;

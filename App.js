/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import colors from './src/constants/colors';

import Routes from './src/Routes';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Routes />
    </NavigationContainer>
  );
};

export default App;

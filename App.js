/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './src/store';

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
    <Provider store={store}>
      <NavigationContainer theme={Theme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

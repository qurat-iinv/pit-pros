import React from 'react';

import store from './src/store/store';
import RootNavigation from './src/navigation/root-navigation';
import {COLORS} from './src/globals';

import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    ...COLORS,
  },
};

function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <RootNavigation />
      </PaperProvider>
    </Provider>
  );
}

export default App;

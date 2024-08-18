import React, { useEffect } from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './app/store/Store';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import ThemeLight from './app/themes/ThemeLight';

const App = () => {
  const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: ThemeLight });
  const appTheme = LightTheme
  return (
    <Provider store={store} >
      <PaperProvider>
        <AppNavigator appTheme={appTheme}/>
      </PaperProvider>
    </Provider>
  );
};

export default App;

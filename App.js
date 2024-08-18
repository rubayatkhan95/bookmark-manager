import React, { useEffect } from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './app/store/Store';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import ThemeLight from './app/themes/ThemeLight';
import { ThemeDark } from './app/themes/ThemeDark';
import { useColorScheme } from 'react-native';
import CustomNativeModule from './CustomModule.js'

const App = () => {
  // useEffect(() => {
  //   // Call the native method when the component mounts
  //   CustomNativeModule.show("Sending Text from JavaScript Showing Text from Android");
  // }, []);
  const scheme = useColorScheme();
  const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: ThemeLight });
  const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: ThemeDark });
  // const appTheme = scheme === 'dark' ? DarkTheme : LightTheme
  const appTheme = LightTheme
  //const appTheme = scheme === 'dark' ? LightTheme : LightTheme
  return (
    <Provider store={store} >
      <PaperProvider>
        <AppNavigator appTheme={appTheme}/>
      </PaperProvider>
    </Provider>
  );
};

export default App;

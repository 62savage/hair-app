import { Provider } from 'react-redux';
import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { colors, commonStyles } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';
import { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.backgroundPrimary,
    },
  };

  const CustomStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[commonStyles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <PersistGate
          loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={commonStyles.container}>
              <ActivityIndicator color={colors.red} />
            </View>
          }
          persistor={persistor}
        >
          <CustomStatusBar backgroundColor="#221F32" barStyle="light-content" />
          <AppView />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}

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
import { NavigationContainer } from '@react-navigation/native';
import { colors, commonStyles } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';
import { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

export default function App() {
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
      <NavigationContainer>
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

import { StyleSheet, StatusBar, Platform } from 'react-native';

import colors from './colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#221F32',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#221F32',
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  borderTest: {
    borderWidth: 1,
    borderColor: 'white',
  },
});

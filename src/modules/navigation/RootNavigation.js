import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import StackNavigationData from './stackNavigationData';
import { colors, commonStyles } from '../../styles';

const Stack = createStackNavigator();

export default function NavigatorView(props) {
  // if (authState.isLoggedIn || authState.hasSkippedLogin) {
  //     return <AppNavigator />;
  // }
  // return <AuthScreen />;

  const headerLeftComponentMenu = () => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.toggleDrawer()}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        {/* dev mode */}
        {/* <Image
          source={require('../../../assets/images/drawer/menu.png')}
          resizeMode="contain"
          style={{
            height: 20,
          }}
        /> */}
      </TouchableOpacity>
    );
  };

  const noNeedHeaderScreen = ['TABSCREENS', 'Auth'];

  return (
    <Stack.Navigator>
      {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            headerLeft: item.headerLeft || headerLeftComponentMenu,
            headerBackground: () => (
              <View
                style={[
                  styles.headerImage,
                  { backgroundColor: colors.backgroundPrimary },
                ]}
              />
            ),
            headerTitleStyle: item.headerTitleStyle,
            headerShown: noNeedHeaderScreen.includes(item.name) ? false : true,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100 + '%',
    height: Header.height,
  },
});

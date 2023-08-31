import * as React from 'react';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, commonStyles } from '../../styles';

import tabNavigationData from './tabNavigationData';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          alignItems: 'center',
          height: Platform.OS === 'ios' ? 80 : 50,
          backgroundColor: colors.backgroundSecondary,
        },
      }}
    >
      {tabNavigationData.map((item, idx) => (
        <Tab.Screen
          key={`tab_item${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.tabBarItemContainer]}>
                <Image
                  resizeMode="contain"
                  source={focused ? item.coloredIcon : item.icon}
                  style={[styles.tabBarIcon]}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomWidth: 2,
    // borderBottomColor: colors.white,
    paddingHorizontal: 10,
    bottom: Platform.OS === 'ios' ? -5 : 0,
  },
  tabBarIcon: {
    width: 45,
    height: 45,
  },
  tabBarIconFocused: {
    tintColor: '#806FE8',
  },
  // shadow: {
  //   shadowColor: '#7F5DF0',
  //   shadowOffset: {
  //     width: 0,
  //     height: 10,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.5,
  //   elevation: 5,
  // },
});

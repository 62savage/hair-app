import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import TabNavigator from './MainTabNavigator';
import GalleryScreen from '../gallery/GalleryViewContainer';
import AuthScreen from '../auth/AuthViewContainer';

// import ProfileScreen from '../profile/ProfileViewContainer';
// import ArticleScreen from '../article/ArticleViewContainer';
// import ChatScreen from '../chat/ChatViewContainer';
// import MessagesScreen from '../chat/MessagesViewContainer';
// import ChartsScreen from '../charts/ChartsViewContainer';
// import AuthScreen from '../auth/AuthViewContainer';

import { colors, fonts } from '../../styles';
import AuthAgreementScreen from '../authAgreement/AuthAgreementView';

const headerBackground = require('../../../assets/images/topBarBg.png');

const StackNavigationData = [
  {
    name: 'Auth',
    component: AuthScreen,
  },
  {
    name: 'TABSCREENS',
    component: TabNavigator,
  },

  // {
  //   name: 'Charts',
  //   component: AvailableInFullVersion,
  //   headerLeft: headerLeftComponent,
  //   headerBackground: { source: headerBackground },
  //   headerTitleStyle: {
  //     fontFamily: fonts.primaryRegular,
  //     color: colors.white,
  //     fontSize: 18,
  //   },
  // },
  {
    name: 'AuthAgreement',
    component: AuthAgreementScreen,
  },

  // {
  //   name: 'Blog',
  //   component: AvailableInFullVersion,
  //   headerLeft: headerLeftComponent,
  //   headerBackground: { source: headerBackground },
  //   headerTitleStyle: {
  //     fontFamily: fonts.primaryRegular,
  //     color: colors.white,
  //     fontSize: 18,
  //   },
  // },

  // {
  //   name: 'Gallery',
  //   component: GalleryScreen,
  //   headerLeft: headerLeftComponent,
  //   headerBackground: { source: headerBackground },
  //   headerTitleStyle: {
  //     fontFamily: fonts.primaryRegular,
  //     color: colors.white,
  //     fontSize: 18,
  //   },
  // },

  // {
  //   name: 'Profile',
  //   component: AvailableInFullVersion,
  //   headerLeft: headerLeftComponent,
  //   headerBackground: { source: headerBackground },
  //   headerTitleStyle: {
  //     fontFamily: fonts.primaryRegular,
  //     color: colors.white,
  //     fontSize: 18,
  //   },
  // },
  // {
  //   name: 'Article',
  //   component: AvailableInFullVersion,
  //   headerLeft: headerLeftComponent,
  //   headerBackground: { source: headerBackground },
  //   headerTitleStyle: {
  //     fontFamily: fonts.primaryRegular,
  //     color: colors.white,
  //     fontSize: 18,
  //   },
  // },
  // {
  //   name: 'Chat',
  //   component: AvailableInFullVersion,
  //   headerLeft: headerLeftComponent,
  //   headerBackground: { source: headerBackground },
  //   headerTitleStyle: {
  //     fontFamily: fonts.primaryRegular,
  //     color: colors.white,
  //     fontSize: 18,
  //   },
  // },
  // {
  //   name: 'Messages',
  //   component: AvailableInFullVersion,
  //   headerLeft: headerLeftComponent,
  //   headerBackground: { source: headerBackground },
  //   headerTitleStyle: {
  //     fontFamily: fonts.primaryRegular,
  //     color: colors.white,
  //     fontSize: 18,
  //   },
  // },
  // {
  //   name: 'Auth',
  //   component: AvailableInFullVersion,
  //   headerLeft: headerLeftComponent,
  //   headerBackground: { source: headerBackground },
  //   headerTitleStyle: {
  //     fontFamily: fonts.primaryRegular,
  //     color: colors.white,
  //     fontSize: 18,
  //   },
  // },
];

export default StackNavigationData;

/* eslint-disable class-methods-use-this */
import React from 'react';
import { View, Text } from 'react-native';

export default function AuthScreen(props) {
  console.log('AuthScreen props', props.user);
  return (
    <View>
      <Text>AuthScreen</Text>
    </View>
  );
}

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-ui-lib';

export default function TouchableIcon({ icon, style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image resizeMode="contain" source={icon} style={[styles.icon, style]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 12,
    height: 12,
  },
});

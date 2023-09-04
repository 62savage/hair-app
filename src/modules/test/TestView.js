import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Service from '../../services';

import { Text } from '../../components/StyledText';

import { colors, commonStyles, windowHeight, windowWidth } from '../../styles';

export default function TestScreen({ route, ...props }) {
  return (
    <View>
      <Text>test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  topHeaderContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  topHeaderText: { fontSize: 12 },
  imageStyle: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    marginBottom: 10,
  },
  mapContainer: { gap: 10 },
  title: { fontSize: 12, fontWeight: 600 },
  desc: { fontSize: 12, fontWeight: 300 },
});

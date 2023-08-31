import React from 'react';
import { Text } from './StyledText';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Header } from '@react-navigation/stack';
import { colors, commonStyles, fonts } from '../styles';
import { useRoute } from '@react-navigation/native';
import { Button } from '.';

const ArrowBack = require('../../assets/images/icons/arrow-back.png');

export default function CustomHeader({ title, goBack, onPressGoBackIcon }) {
  return (
    <View style={styles.headerContainer}>
      {goBack ? (
        <TouchableOpacity style={styles.goBackIcon} onPress={onPressGoBackIcon}>
          <Image resizeMode="contain" source={ArrowBack} />
        </TouchableOpacity>
      ) : null}
      <Text hCenter style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.backgroundPrimary,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  headerText: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },

  goBackIcon: {
    position: 'absolute',
    paddingHorizontal: 24,
    paddingVertical: 18,
    alignSelf: 'left',
    left: 20,
    //top: 10,
  },
});

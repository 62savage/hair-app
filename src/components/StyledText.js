import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import { colors, fonts } from '../styles';

function applyGeneralStyles({
  style,
  bold,
  light,
  white,
  underline,
  hCenter,
  lineThrough,
  color,
  size,
  fontWeight,
}) {
  return [
    style && style,
    fontWeight && { fontWeight: fontWeight },
    // bold && styles.bold,
    light && styles.light,
    white && styles.white,
    underline && styles.underline,
    hCenter && { textAlign: 'center' },
    lineThrough && styles.lineThrough,
    color && { color: color },
    size && { fontSize: size },
  ];
}

export function Text(props) {
  const finalStyle = [styles.default, ...applyGeneralStyles(props)];

  return <RNText {...props} style={finalStyle} />;
}

export function Title(props) {
  const finalStyle = [
    styles.default,
    styles.title,
    ...applyGeneralStyles(props),
  ];

  return <RNText {...props} style={finalStyle} />;
}

export function Caption(props) {
  const finalStyle = [
    styles.default,
    styles.caption,
    ...applyGeneralStyles(props),
  ];

  return <RNText {...props} style={finalStyle} />;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: fonts.primaryRegular,
    // fontColor: colors.white,
    color: colors.white,
  },
  bold: {
    fontFamily: fonts.primaryBold,
  },
  light: {
    fontFamily: fonts.primaryLight,
  },
  title: {
    fontSize: 18,
  },
  caption: {
    fontSize: 13,
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.gray,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  white: {
    color: colors.white,
  },
});

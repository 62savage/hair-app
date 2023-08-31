import React from 'react';
import ScrollViewContainer from '../../components/Container';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from '../../components/StyledText';
import { colors, windowWidth } from '../../styles';
import Spacer from '../../components/Spacer';

const _bell = require('../../../assets/images/icons/bell.png');

export default function InfoView(props) {
  console.log('InfoView props', props);

  return (
    <ScrollViewContainer
      header
      screenName="Info"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Home');
      }}
    >
      <View style={styles.introductionContainer}>
        <Image source={_bell} />
      </View>
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  introductionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth - 40,
    backgroundColor: colors.white,
    paddingVertical: 80,
    borderRadius: 10,
  },
});

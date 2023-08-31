import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Text } from '../../components/StyledText';
import ScrollViewContainer from '../../components/Container';
import CustomButton from '../../components/Button';

import { colors, commonStyles, windowWidth } from '../../styles';
import { Spacer, TouchableIcon } from '../../components';

const _check_linear_gradient = require('../../../assets/images/icons/check-linear-gradient.png');
const _close_button = require('../../../assets/images/icons/close-button.png');

export default function Result() {
  return (
    <ScrollViewContainer
      header
      screenName="My Page"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Home');
      }}
    >
      <CustomButton
        rounded
        borderRadius={10}
        bgGradientStart={colors.backgroundSecondary}
        bgGradientEnd={colors.backgroundSecondary}
        style={{
          width: windowWidth - 40,
          justifyContent: 'flex-start',
          height: 135,
        }}
        onPress={() => {}}
      >
        <View
          style={{
            flexBasis: '20%',
            flexWrap: 'wrap',
            marginHorizontal: 20,
          }}
        >
          <Image
            resizeMode="contain"
            source={_check_linear_gradient}
            style={styles.icon}
          />
        </View>
        <View
          style={{
            flexBasis: '70%',
            flexWrap: 'wrap',
          }}
        >
          <Text fontWeight="700" size={16}>
            타이틀
          </Text>
          <Spacer size={7} />
          <Text fontWeight="300" size={10}>
            시간
          </Text>
          <Spacer size={7} />
          <Text>진단 결과 다시보기</Text>
        </View>

        <TouchableIcon
          style={{
            margin: 10,
            width: 18,
            height: 18,
            top: -30,
          }}
          icon={_close_button}
          onPress={() => {}}
        />
      </CustomButton>
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
  closeIcon: {},
});

/* eslint-disable class-methods-use-this */
import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from '../../components/StyledText';
import { colors, commonStyles, windowHeight } from '../../styles';
import { Spacer } from '../../components';
import SvgLinear from '../../components/SvgLinear';

const _check_linear_gradient = require('../../../assets/images/icons/check-linear-gradient.png');
const _right_arrow = require('../../../assets/images/icons/right-arrow.png');

export default function AnalysisScreen({ route, ...props }) {
  const { data } = route.params;
  return (
    <View
      style={[
        commonStyles.container,
        { height: windowHeight - 350, justifyContent: 'center' },
      ]}
    >
      <View style={{ width: 90, height: 90 }}>
        <SvgLinear />
      </View>
      {/* <Image
        resizeMode="contain"
        source={_check_linear_gradient}
        style={[styles.icon, { width: 80, height: 80 }]}
      /> */}
      <Spacer />
      <Text hCenter size={20} fontWeight="900">
        수고하셨습니다.
      </Text>
      <Spacer size={2} />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('DETAIL', {
            data,
          });
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1.5 }}>
          <Text hCenter size={12} fontWeight="500">
            진단 결과 확인하기
          </Text>
          <Image
            resizeMode="contain"
            source={_right_arrow}
            style={[styles.icon, { width: 7, height: 7 }]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const buttonContainerStyles = (_num, _backgroundColor) =>
  StyleSheet.create({
    buttonContainer: {
      width: _num,
      height: _num,
      borderRadius: _num / 2,
      backgroundColor: _backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight - 280,
  },
  button: {
    backgroundColor: '#F9FA50',
    overflow: 'hidden',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAboveButton: {
    position: 'absolute',
    top: 30,
    width: '100%',
    alignItems: 'center',
    color: '#C8C8C8',
    fontSize: 12,
    width: 210,
    textAlign: 'center',
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    width: 104,
    textAlign: 'center',
    color: '#000',
  },
  icon: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
});

/**
 *
 * @todo
 * - [ ] add navigation to diagnosis first proceed screen
 */

const EndView = (
  <View
    style={[
      commonStyles.container,
      { height: windowHeight - 350, justifyContent: 'center' },
    ]}
  >
    <Image
      resizeMode="contain"
      source={_check_linear_gradient}
      style={[styles.icon, { width: 80, height: 80 }]}
    />
    <Spacer />
    <Text hCenter size={20} fontWeight="900">
      수고하셨습니다.
    </Text>
    <Spacer size={2} />
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('TABSCREENS');
        setIsStart(true);
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1.5 }}>
        <Text hCenter size={12} fontWeight="500">
          진단 결과 확인하기
        </Text>
        <Image
          resizeMode="contain"
          source={_right_arrow}
          style={[styles.icon, { width: 7, height: 7 }]}
        />
      </View>
    </TouchableOpacity>
  </View>
);

/* eslint-disable class-methods-use-this */
import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from '../../components/StyledText';
import CustomButton from '../../components/Button';
import ScrollViewContainer from '../../components/Container';

import { colors, commonStyles, windowHeight } from '../../styles';

export default function AnalysisScreen(props) {
  const { tree, curAnalysis } = props;
  let curBranch = tree.filter(item => item.id == curAnalysis)[0];

  const onPressStartButton = () => {
    props.navigation.navigate('ANAlYSIS');
  };

  return (
    <ScrollViewContainer
      scrollable={false}
      style={styles.container}
      header
      // screenName="Start"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Home');
      }}
    >
      <View style={buttonContainerStyles(482, '#2C2941').buttonContainer}>
        <View style={buttonContainerStyles(358, '#312E47').buttonContainer}>
          <View style={buttonContainerStyles(252, '#383550').buttonContainer}>
            <Text style={styles.textAboveButton}>
              나에게 맞는 헤어스타일 부터 헤어고민까지 진단 시작하기.
            </Text>
            <CustomButton
              rounded
              borderRadius={104 / 2}
              style={{ width: 104, height: 104 }}
              onPress={onPressStartButton}
              bgGradientStart={curBranch.startGradient}
              bgGradientEnd={curBranch.endGradient}
            >
              <Text style={styles.buttonText}>START!</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </ScrollViewContainer>
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

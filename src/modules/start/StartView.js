/* eslint-disable class-methods-use-this */
import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import _logo from '../../../assets/images/mbombs_logo.png';
import { Text } from '../../components/StyledText';
import CustomButton from '../../components/Button';
import { colors, windowHeight } from '../../styles';
import ScrollViewContainer from '../../components/Container';

export default function AnalysisScreen(props) {
  const onPressStartButton = () => {
    props.navigation.navigate('ANAlYSIS');
  };
  return (
    // <ScrollViewContainer
    //   header
    //   screenName="Hair Analyst"
    //   goBack
    //   onPressGoBackIcon={() => {
    //     props.navigation.navigate('Home');
    //   }}
    // >
    <View style={styles.container}>
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
            >
              <Text style={styles.buttonText}>START!</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </View>
    // </ScrollViewContainer>
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
    fontWeight: '800',
    width: 104,
    textAlign: 'center',
    color: '#000',
  },
});

/**
 *
 * @todo
 * - [ ] add navigation to diagnosis first proceed screen
 */

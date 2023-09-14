/* eslint-disable class-methods-use-this */
import * as React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text } from '../../components/StyledText';
import CustomButton from '../../components/Button';
import ScrollViewContainer from '../../components/Container';

import { colors, commonStyles, windowHeight } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';

export default function AnalysisScreen(props) {
  const { tree, curAnalysis } = props;
  let curBranch = tree.filter(item => item.id == curAnalysis)[0];

  const onPressStartButton = () => {
    props.navigation.navigate('ANAlYSIS');
  };

  const animatedValue = new Animated.Value(0);

  const buttonScale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.25, 1.5],
  });

  const onPressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    onPressStartButton();
  };

  const animatedScaleStyle = {
    transform: [{ scale: buttonScale }],
  };

  return (
    <ScrollViewContainer
      scrollable={false}
      style={styles.container}
      header
      screenName="Start"
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
            <TouchableWithoutFeedback
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            >
              <Animated.View style={[styles.iconContainer, animatedScaleStyle]}>
                <LinearGradient
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  colors={[curBranch.startGradient, curBranch.endGradient]}
                  style={[
                    styles.buttonGradient,
                    { borderRadius: 52, width: 104, height: 104 },
                  ]}
                >
                  <Text style={styles.buttonText}>START!</Text>
                </LinearGradient>
              </Animated.View>
            </TouchableWithoutFeedback>
            {/* <CustomButton
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              rounded
              borderRadius={104 / 2}
              style={{ width: 104, height: 104 }}
              // onPress={onPressStartButton}
              bgGradientStart={curBranch.startGradient}
              bgGradientEnd={curBranch.endGradient}
            >
              <Animated.View style={[styles.iconContainer, animatedScaleStyle]}>
                <Text style={styles.buttonText}>START!</Text>
              </Animated.View>
            </CustomButton> */}
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
  iconContainer: {
    height: 104,
    width: 104,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 *
 * @todo
 * - [ ] add navigation to diagnosis first proceed screen
 */

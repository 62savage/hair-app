import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../styles';
import CustomButton from '../../components/Button';
/**
 * @todo
 * - [ ] style props
 */

export default function Mbombs08() {
  return (
    <View style={styles.container}>
      <View style={styles.largeButtonContainer}>
        <View style={styles.mediumButtonContainer}>
          <View style={styles.smallButtonContainer}>
            <Text style={styles.textAboveButton}>
              나에게 맞는 헤어스타일 부터 헤어고민까지 진단 시작하기.
            </Text>
            <CustomButton
              rounded
              borderRadius={104 / 2}
              style={{ width: 104, height: 104 }}
            >
              <Text style={styles.buttonText}>START!</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F9FA50',
    overflow: 'hidden',
  },
  smallButtonContainer: {
    width: 252,
    height: 252,
    borderRadius: 252 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383550',
  },
  mediumButtonContainer: {
    width: 358,
    height: 358,
    borderRadius: 358 / 2,
    backgroundColor: '#312E47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeButtonContainer: {
    width: 482,
    height: 482,
    borderRadius: 482 / 2,
    backgroundColor: '#2C2941',
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
  },
});

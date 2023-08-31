import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../styles';
import CustomButton from '../../components/Button';

export default function Mbombs09(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textAboveButton}>
        최근 1년 이내 {'\n'}셀프 염색 혹은 탈색{'\n'} 시술한 경험이 있다.
      </Text>
      <CustomButton>
        <Text style={styles.buttonText}>YES</Text>
      </CustomButton>
      <CustomButton bgGradientStart="#EDF0F1" bgGradientEnd="#96A5B1">
        <Text style={styles.buttonText}>NO</Text>
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  textAboveButton: {
    width: '100%',
    color: '#fff',
    fontSize: 24,
    width: 210,
    textAlign: 'center',
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 12,
    color: '#221F32',
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
  },
});

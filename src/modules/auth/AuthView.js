/* eslint-disable class-methods-use-this */
import * as React from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from '../../components';

import _logo from '../../../assets/images/mbombs_logo.png';
import { commonStyles } from '../../styles';

export default function AuthScreen(props) {
  console.log('AuthScreen props', props.user);

  useEffect(() => {
    let timeout;
    if (props.user) {
      // timeout = setTimeout(() => {
      //   props.navigation.navigate('RNMBombs');
      // }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [props.user]);
  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer]}>
        <Image style={styles.logo} source={_logo} resizeMode="contain" />
      </View>
      <View style={[styles.loginButtonsContainer]}>
        <Button
          style={[styles.demoButton]}
          primary
          caption="Button"
          onPress={() => {
            props.userLogin();
          }}
        />
        <Button
          style={[styles.demoButton]}
          primary
          caption="Button"
          onPress={() => {
            props.userLogin();
          }}
        />
        <Button
          style={[styles.demoButton]}
          primary
          caption="Button"
          onPress={() => {
            props.userLogin();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#221F32',
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  logo: {
    width: '40%',
    height: 'auto',
    aspectRatio: 26 / 12,
  },
  logoContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10,
  },
  loginButtonsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10,
  },
});

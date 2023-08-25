/* eslint-disable class-methods-use-this */
import * as React from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from '../../components';

import _logo from '../../../assets/images/mbombs_logo.png';
import { commonStyles } from '../../styles';

export default function AuthScreen(props) {
  console.log('AuthScreen props', props.user);

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    let timeout;
    if (props.user && props.user.email) {
      setLoading(true);
      // timeout = setTimeout(() => {
      //   props.navigation.navigate('RNMBombs');
      // }, 3000);
    }
    return () => {
      clearTimeout(timeout);
      setLoading(false);
    };
  }, [props.user]);

  const LoginProgressBar = () => {
    return (
      <View style={[styles.loginButtonsContainer]}>
        <View></View>
      </View>
    );
  };

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
            props.login({ email: 'def' });
          }}
        />
        <Button
          style={[styles.demoButton]}
          primary
          caption="Button"
          onPress={() => {
            props.login({});
          }}
        />
        <Button
          style={[styles.demoButton]}
          primary
          caption="Button"
          onPress={() => {
            props.login({});
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
    alignSelf: 'stretch',
    marginTop: 8,
    marginBottom: 8,
  },
  logo: {
    width: '40%',
    height: 'auto',
    aspectRatio: 26 / 12,
  },
  logoContainer: {
    flex: 0.8,
    display: 'flex',
    justifyContent: 'flex-end',
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
    alignSelf: 'stretch',
    margin: 60,
    marginBottom: 10,
  },
});

/* eslint-disable class-methods-use-this */
import * as React from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from '../../components';
import _logo from '../../../assets/images/mbombs_logo.png';
import LinearGradient from 'react-native-linear-gradient';

export default function AuthScreen(props) {
  console.log('AuthScreen props', props.user);

  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    let interval;
    var startTime = new Date().getTime();
    if (props.user && props.user.email) {
      setLoading(true);
      if (progress < 1) {
        interval = setInterval(() => {
          setProgress(progress => {
            if (progress < 1) {
              return progress + 0.006;
            }
            return progress;
          });
          if (new Date().getTime() - startTime > 3000) {
            clearInterval(interval);
            props.navigation.navigate('RNMBombs');
            return;
          }
        }, 10);
      }
    }
    return () => {
      clearInterval(interval);
      setLoading(false);
    };
  }, [props.user]);

  const LoginProgressBar = () => {
    return (
      <View style={[styles.loginButtonsContainer]}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'lightgray',
            borderRadius: 4,
            overflow: 'hidden',
            margin: 65,
          }}
        >
          <LinearGradient
            flex={progress}
            style={{ flex: progress, height: 5 }}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={['#806FE8', '#CC7AFF']}
          />
          <View style={{ flex: 1 - progress }} />
        </View>
      </View>
    );
  };

  const LoginButtons = () => {
    return (
      <View style={[styles.loginButtonsContainer]}>
        <Button
          style={[styles.demoButton]}
          primary
          caption="Demo"
          onPress={() => {
            props.login({ email: 'def' });
          }}
        />
        <Button
          style={[styles.demoButton]}
          primary
          caption="Login"
          onPress={() => {
            props.login({});
          }}
        />
        <Button
          style={[styles.demoButton]}
          primary
          caption="Register"
          onPress={() => {
            props.login({});
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer]}>
        <Image style={styles.logo} source={_logo} resizeMode="contain" />
      </View>
      {loading ? <LoginProgressBar /> : <LoginButtons />}
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
  progress: {
    height: 10,
    width: undefined,
  },
});

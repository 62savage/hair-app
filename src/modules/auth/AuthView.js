/* eslint-disable class-methods-use-this */
import * as React from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import { Button, Spacer } from '../../components';
import _logo from '../../../assets/images/mbombs_logo.png';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '../../components/StyledText';
import CustomButton from '../../components/Button';
import { windowWidth } from '../../styles';
import AppleLoginBtn from '../../molecules/auth/appleLogin';
import AuthService from '../../services/authService';
import Storage from '../../services/Storage';
import { get } from 'lodash';

export default function AuthScreen(props) {
  // dev mode

  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const loginButtonBindWithSocial = async (email, signinMethod, userData) => {
    try {
      let res;
      if (email) {
        res = await AuthService.socialLoginOrRegister(email, signinMethod);
      }
      if (res && res.status) {
        await saveUserDataOnAsyncStorage({ ...res, ...userData });
        props.login({ ...res, ...userData });
      } else if (res && !res.status) {
        props.login({ ...res, ...userData });
        // props.navigation.navigate('AuthAgreement');
      }
    } catch (error) {
      console.log('service login error', error);
      throw error;
    }
  };

  const saveUserDataOnAsyncStorage = async userData => {
    try {
      await Storage.storeUserData(userData);
      console.log('saveUserDataOnAsyncStorage', userData);
    } catch (error) {
      console.log('saveUserDataOnAsyncStorage error', error);
    }
  };

  const getAsyncStorageUserData = async () => {
    try {
      const res = await Storage.getUserData();
      console.log('user data', res);
      if (res && res.email) {
        props.login(res);
      }
    } catch (error) {
      console.log('getAsyncStorageUserData error', error);
    }
  };

  useEffect(() => {
    getAsyncStorageUserData();
  }, []);

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
            // dev mode
            props.navigation.navigate('TABSCREENS');
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

  const Logo = (
    <View style={[styles.logoContainer]}>
      <Image style={styles.logo} source={_logo} resizeMode="contain" />
    </View>
  );

  const WelcomeText = (
    <View style={[styles.welcomeContainer]}>
      <Text bold style={{ fontSize: 40, marginBottom: 10 }}>
        Login
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Hello, Welcome back
      </Text>
    </View>
  );

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
        {Platform.OS === 'ios' ? (
          <AppleLoginBtn
            signinApproved={props =>
              loginButtonBindWithSocial(props.email, 'APPLE', props)
            }
          />
        ) : null}

        <Button
          style={[styles.demoButton]}
          primary
          caption="Guest Login"
          onPress={() => {
            props.login({
              age: null,
              authorizationCode:
                'cb9580edb96854f8bb3e3655177bae687.0.srsyr.D6wiR94OyQJ02Mw6eYBRsw',
              authorizedScopes: [],
              city: null,
              email: 'gwangbaekun@gmail.com',
              emailVerified: null,
              fullName: {
                familyName: 'BAEK',
                givenName: 'Jeyeol',
                middleName: null,
                namePrefix: null,
                nameSuffix: null,
                nickname: null,
              },
              gender: null,
              id: 'clm22d3y30002ntjxklmi4qt0',
              identityToken:
                'eyJraWQiOiJXNldjT0tCIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLm1ib21icy5pb3MiLCJleHAiOjE2OTM4NDc0NzgsImlhdCI6MTY5Mzc2MTA3OCwic3ViIjoiMDAxMjgxLmIyYjRlNDJkYzkyOTRiZmJiYmJhYWI3MGQ3YTRhZTAyLjAyMzMiLCJub25jZSI6IjBjOGFmZWZhM2FhYjZjNmNkNjc5ODNmOTE2MWQyMDg0MzAwOTRmM2UzYWVjYjY2NmYwNjhkM2I1NDQwYzRlMzciLCJjX2hhc2giOiJFS1U4dzRWYVZRWEZpMlNyLWVqODh3IiwiZW1haWwiOiJnd2FuZ2JhZWt1bkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJhdXRoX3RpbWUiOjE2OTM3NjEwNzgsIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZX0.iyiWcG1nVHNa1KpZCvhtVj11z3o_Hcy6f4dNFqfyJJf1onEtVFJ8-anOy8vxVgE1wG_sct2gV32UHIe-4i6fA_wa5-yShi7QbnsRWKHnzBtbDHN7-wtEuc0PUGdjk2bpBiY-eJGfJyIktEWdbD8BLujpO8kwxxqmmvTF6DwjKUiJ6j39CsjhetUaw4H7spx7yN1_mKUjqrXQl-FkbsEXZrIB3E641oxged-OdvXIted7kbm1b6yuFibYGdfxqCsGyO3AGmfKdaNnXWKmFhOgs7t8jEiom-fsAT1Cv-80J-qLzQt9VeUV0ywJn5hVl22I3z0xvaEEYet64GQiCofejg',
              image: null,
              name: null,
              nonce: 'saBckM840FfQRP.B2eXm9Uf3FskDRbHD',
              password: null,
              realUserStatus: 1,
              state: null,
              status: true,
              user: '001281.b2b4e42dc9294bfbbbbaab70d7a4ae02.0233',
            });
          }}
        />

        <Spacer />
        <Text
          onPress={() => {
            props.navigation.navigate('AuthAgreement');
          }}
        >
          이용 약관
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? Logo : WelcomeText}
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
  welcomeContainer: {
    flex: 0.6,
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
    marginHorizontal: 60,
  },
  progress: {
    height: 10,
    width: undefined,
  },
});

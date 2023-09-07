import React, { useEffect, useState } from 'react';
import ViewContainer from '../../components/Container';
import { Text } from '../../components/StyledText';
import { Image, StyleSheet, View } from 'react-native';
import { colors, commonStyles, windowWidth } from '../../styles';
import { Header, Spacer, TouchableIcon } from '../../components';
import { Checkbox, Chip } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Service from '../../services';
import { set } from 'react-native-reanimated';
import CustomButton from '../../components/Button';

const _close_button = require('../../../assets/images/icons/close-button.png');

export default function AuthAgreementView(props) {
  const { userData } = props.route.params;

  const [allChecked, setAllChecked] = useState(false);
  const [isExtended, setIsExtended] = useState({
    type: '',
    status: false,
  });
  const [checked, setChecked] = useState({
    age: false,
    terms: false,
    privacy: false,
    marketing: false,
  });

  const saveUserDataOnAsyncStorage = async userData => {
    try {
      await Storage.storeUserData(userData);
      console.log('saveUserDataOnAsyncStorage', userData);
    } catch (error) {
      console.log('saveUserDataOnAsyncStorage error', error);
    }
  };

  useEffect(() => {
    if (checked.age && checked.terms && checked.privacy && checked.marketing) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checked]);

  const IntroduceBoxExtended = ({ type }) => {
    console.log('type', type);
    const [terms, setTerms] = useState('');

    useEffect(() => {
      let res;
      const getTerms = async () => {
        if (type === 'terms') {
          res = await Service.getPrivacyPolicy();
          console.log(res.text);
          setTerms(res.text);
        } else if (type === 'privacy') {
          res = await Service.getPrivacyPolicy();
          setTerms(res.text);
        } else if (type === 'marketing') {
          res = await Service.getMarketingPolicy();
          setTerms(res.text);
        }
      };

      getTerms();
    }, []);

    return (
      <View style={styles.introductionContainer}>
        <View style={styles.closeIcon}>
          <TouchableIcon
            icon={_close_button}
            onPress={() => {
              setIsExtended({
                type: '',
                status: false,
              });
            }}
          />
        </View>
        <Spacer />
        <Text size={16} fontWeight="700" color={colors.black}>
          엠밤스 어플리케이션 사용설명서
        </Text>
        <Spacer size={10} />
        <Text
          paddingHorizontal={20}
          hCenter
          size={12}
          fontWeight="300"
          color={colors.black}
        >
          헤어고민 진단부터 혜택 안내 그리고 나에게 가장 가까운 미용실찾기 전문
          어플리케이션입니다. 해당 어플리케이션 200% 활용하기 설명서
          시작하겠습니다.
        </Text>
        <Spacer size={20} />
        <View style={{ width: windowWidth - 70, justifyContent: 'flex-start' }}>
          <Text color={colors.black}>{terms}</Text>
        </View>
      </View>
    );
  };

  const CheckBoxesContainer = (
    <View>
      <Text hCenter size={18} fontWeight="500">
        환영합니다.{'\n'}가입하시려면 약관에 동의해주세요.
      </Text>
      <Spacer />
      <View width={windowWidth - 60} style={styles.section}>
        <View width="100%" style={styles.sectionView}>
          <View style={styles.checkboxHolder}>
            <CustomCheckBoxControll
              checked={allChecked}
              setChecked={() => {
                if (allChecked) {
                  setAllChecked(false);
                  setChecked({
                    age: false,
                    terms: false,
                    privacy: false,
                    marketing: false,
                  });
                } else {
                  setAllChecked(true);
                  setChecked({
                    age: true,
                    terms: true,
                    privacy: true,
                    marketing: true,
                  });
                }
              }}
            />
            <Text>약관 전체 동의하기 [선택 동의 포함]</Text>
          </View>
          <View style={styles.checkboxHolder}>
            <CustomCheckBox
              checked={checked.age}
              setChecked={() => setChecked({ ...checked, age: !checked.age })}
            />
            <View>
              <Text>[필수] 만 14세 이상 입니다.</Text>
            </View>
          </View>
          <View style={styles.checkboxHolder}>
            <CustomCheckBox
              checked={checked.terms}
              setChecked={() =>
                setChecked({ ...checked, terms: !checked.terms })
              }
            />
            <View>
              <Spacer size={10} />
              <Text>[필수] 이용 약관 동의</Text>
              <Text
                onPress={() =>
                  setIsExtended({
                    type: 'terms',
                    status: true,
                  })
                }
              >
                [자세히보기]
              </Text>
            </View>
          </View>
          <View style={styles.checkboxHolder}>
            <CustomCheckBox
              checked={checked.privacy}
              setChecked={() =>
                setChecked({ ...checked, privacy: !checked.privacy })
              }
            />
            <View>
              <Spacer size={10} />
              <Text>[필수] 개인정보 수집 및 이용 동의</Text>
              <Text
                onPress={() =>
                  setIsExtended({
                    type: 'privacy',
                    status: true,
                  })
                }
              >
                [자세히보기]
              </Text>
            </View>
          </View>
          <View style={styles.checkboxHolder}>
            <CustomCheckBox
              checked={checked.marketing}
              setChecked={() =>
                setChecked({ ...checked, marketing: !checked.marketing })
              }
            />
            <View>
              <Spacer size={10} />
              <Text>[선택] 광고성 정보 수신 동의</Text>
              <Text
                onPress={() =>
                  setIsExtended({
                    type: 'marketing',
                    status: true,
                  })
                }
              >
                [자세히보기]
              </Text>
            </View>
          </View>
          <Spacer />
          {userData && (
            <CustomButton
              bgGradientEnd={colors.backgroundPrimary}
              bgGradientStart={colors.backgroundPrimary}
              onPress={async () => {
                props.login(userData);
                props.navigation.navigate('Auth');
                await saveUserDataOnAsyncStorage({ ...res, ...userData });
              }}
            >
              <Text fontWeight="700" size={16}>
                확인
              </Text>
            </CustomButton>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <ViewContainer
      header
      screenName="AuthAgreement"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Auth');
      }}
      style={{ paddingBottom: 160 }}
      scrollable={false}
    >
      <View style={[styles.container]}>
        {isExtended.type ? (
          <IntroduceBoxExtended type={isExtended.type} />
        ) : (
          CheckBoxesContainer
        )}
      </View>
    </ViewContainer>
  );
}

const CustomCheckBox = ({ checked, setChecked }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setChecked(!checked);
      }}
    >
      <Checkbox.Android
        activeOpacity={0}
        focusable={true}
        mode="ios"
        color="#00BFFF"
        uncheckedColor="#ffffff"
        status={checked ? 'checked' : 'unchecked'}
      />
    </TouchableWithoutFeedback>
  );
};

const CustomCheckBoxControll = ({ checked, setChecked }) => {
  return (
    <TouchableWithoutFeedback onPress={setChecked}>
      <View
        style={[
          {
            width: 20,
            height: 20,
            borderRadius: 10,

            margin: 8,
            justifyContent: 'center',
            alignItems: 'center',
          },
          commonStyles.borderTest,
          {
            borderWidth: 2,
          },
        ]}
      >
        {checked && (
          <View
            style={[
              {
                width: 12,
                height: 12,
                borderRadius: 10,
                backgroundColor: '#00BFFF',
              },
            ]}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  section: {
    backgroundColor: colors.backgroundSecondary,
    height: 300,
    borderRadius: 15,
    padding: 30,
  },
  sectionView: {
    flex: 1,
    flexBasis: '100%',
  },
  checkboxHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  introductionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth - 40,
    height: 'auto',
    backgroundColor: colors.white,
    paddingVertical: 40,
    borderRadius: 30,
  },
  icon: {
    width: 24,
    height: 24,
  },
  closeIcon: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
    marginRight: 20,
  },
  linkerButtonsLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth - 40,
    gap: 10,
  },
});

import React, { useEffect, useState } from 'react';
import ViewContainer from '../../components/Container';
import { Text } from '../../components/StyledText';
import { StyleSheet, View } from 'react-native';
import { colors, commonStyles, windowWidth } from '../../styles';
import { Spacer } from '../../components';
import { Checkbox, Chip } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function AuthAgreementView(props) {
  const [allChecked, setAllChecked] = useState(false);
  const [checked, setChecked] = useState({
    age: false,
    terms: false,
    privacy: false,
    marketing: false,
  });

  useEffect(() => {
    if (checked.age && checked.terms && checked.privacy && checked.marketing) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checked]);

  return (
    <ViewContainer scrollable={false}>
      <View style={[styles.container]}>
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
                  setChecked={() =>
                    setChecked({ ...checked, age: !checked.age })
                  }
                />
                <View>
                  <Spacer size={10} />
                  <Text>[필수] 만 14세 이상 입니다.</Text>
                  <Text>[자세히보기]</Text>
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
                  <Text>[자세히보기]</Text>
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
                  <Text>[자세히보기]</Text>
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
                  <Text>[자세히보기]</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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
});

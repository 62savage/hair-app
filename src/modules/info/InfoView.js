import React, { useEffect, useState } from 'react';
import ScrollViewContainer from '../../components/Container';
import { Image, Linking, StyleSheet, View } from 'react-native';
import { Text } from '../../components/StyledText';
import { colors, commonStyles, windowWidth } from '../../styles';
import Spacer from '../../components/Spacer';
import CustomButton from '../../components/Button';
import Service from '../../services';
import TouchableIcon from '../../components/TouchableIcon';
import { useRoute } from '@react-navigation/native';

const _bell = require('../../../assets/images/icons/bell.png');
const _right_arrow = require('../../../assets/images/icons/right-arrow.png');
const _close_button = require('../../../assets/images/icons/close-button.png');

export default function InfoView(props) {
  const [isExtended, setIsExtended] = useState(false);
  const [noticeStringData, setNoticeStringData] = useState([]);

  const handleClickWebviewButton = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const getNoticeStringData = async () => {
    try {
      const result = await Service.getInfo();
      let noticeStringData = result.text.split('\n');
      noticeStringData.map((item, idx) => {
        if (item.includes('STEP')) {
          noticeStringData[idx] = (
            <Text
              color={colors.black}
              key={`notice-string-${idx}`}
              size={12}
              fontWeight="700"
              style={{ marginBottom: 10 }}
            >
              {item}
            </Text>
          );
        } else {
          noticeStringData[idx] = (
            <Text
              color={colors.black}
              key={`notice-string-${idx}`}
              size={12}
              fontWeight="300"
            >
              {item}
            </Text>
          );
        }
      });
      setNoticeStringData(noticeStringData);
    } catch (error) {
      console.error('Error fetching notice:', error);
    }
  };

  const linkData = [
    {
      // icon: require('../../../assets/images/icons/instagram.png'),
      title: (
        <Text size={16} fontWeight="200">
          남다른 취향을 위한 색다른 감각
        </Text>
      ),
      belowTitle: (
        <Text size={16} fontWeight="700">
          로이드밤 헤어
        </Text>
      ),
      link: 'http://lloydbomb.com/',
    },
    {
      // icon: require('../../../assets/images/icons/instagram.png'),
      title: (
        <Text size={16} fontWeight="200">
          작은 차이를 만드는 헤어 큐레이터
        </Text>
      ),
      belowTitle: (
        <Text size={16} fontWeight="700">
          휴이엠 헤어
        </Text>
      ),
      link: 'https://huuim.com/',
    },
    // {
    //   icon: require('../../../assets/images/icons/phone.png'),
    //   title: (
    //     <Text size={16} fontWeight="700">
    //       다이렉트 전화 문의
    //     </Text>
    //   ),
    //   belowTitle: (
    //     <Text size={12} fontWeight="300">
    //       070-8824-0111
    //     </Text>
    //   ),
    //   link: 'tel:070-8824-0111',
    // },
  ];

  const IntroduceBox = (
    <View style={styles.introductionContainer}>
      <Image resizeMode="contain" source={_bell} style={styles.icon} />
      <Spacer />
      <Text size={16} fontWeight="700" color={colors.black}>
        헤어 디자이너 셀링4.0 사용설명서
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
      <CustomButton
        rounded
        borderRadius={100}
        bgGradientStart="#806FE8"
        bgGradientEnd="#CC7AFF"
        onPress={() => {
          getNoticeStringData();
          setIsExtended(true);
        }}
      >
        <Text fontWeight="700" size={16}>
          Information
        </Text>
      </CustomButton>
    </View>
  );

  const IntroduceBoxExtended = (
    <View style={styles.introductionContainer}>
      <View style={styles.closeIcon}>
        <TouchableIcon
          icon={_close_button}
          onPress={() => {
            setIsExtended(false);
          }}
        />
      </View>
      <Image resizeMode="contain" source={_bell} style={styles.icon} />
      <Spacer />
      <Text size={16} fontWeight="700" color={colors.black}>
        헤어 디자이너 셀링4.0 사용설명서
      </Text>
      <Spacer size={10} />
      <Spacer size={20} />
      <View style={{ width: windowWidth - 70, justifyContent: 'flex-start' }}>
        {noticeStringData.map((item, _) => {
          return item;
        })}
      </View>
    </View>
  );

  return (
    <ScrollViewContainer
      header
      screenName="Info"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Home');
      }}
    >
      {isExtended ? IntroduceBoxExtended : IntroduceBox}
      <Spacer size={20} />
      <View style={styles.linkerButtonsLayout}>
        {linkData.map((item, idx) => (
          <CustomButton
            key={`linker-button-${idx}`}
            rounded
            borderRadius={10}
            bgGradientStart="#806FE8"
            bgGradientEnd="#CC7AFF"
            style={{
              width: windowWidth - 40,
              justifyContent: 'flex-start',
              height: 75,
            }}
            onPress={() => {
              if (item.link.includes('tel:')) {
                Linking.openURL(item.link);
                return;
              }
              handleClickWebviewButton(item.link);
            }}
          >
            {/* <View
              style={{
                flexDirection: 'column',
                flexBasis: '15%',
                flexWrap: 'wrap',
              }}
            >
              <Image
                resizeMode="contain"
                source={item.icon}
                style={styles.icon}
              />
            </View> */}
            <View
              style={{
                flexDirection: 'column',
                flexBasis: '90%',
                flexWrap: 'wrap',
              }}
            >
              {item.title}
              {item.belowTitle}
            </View>
            <View
              style={{
                flexBasis: '10%',
                flexWrap: 'wrap',
              }}
            >
              <Image
                resizeMode="contain"
                source={_right_arrow}
                style={(styles.icon, { width: 12, height: 12 })}
              />
            </View>
          </CustomButton>
        ))}
      </View>
      <Spacer size={80} />
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
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

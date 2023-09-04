import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Service from '../../services';

import ViewContainer from '../../components/Container';
import { Text } from '../../components/StyledText';
import Spacer from '../../components/Spacer';
import { useRoute } from '@react-navigation/native';

import { colors, commonStyles, windowHeight, windowWidth } from '../../styles';

const _check_linear_gradient = require('../../../assets/images/icons/check-linear-gradient.png');

export default function TestScreen(props) {
  const route = useRoute();
  const [test, setTest] = useState();

  const Mock = [
    {
      userId: 'clck8it81000cph397yp5cnz9',
      analyticInfo: [
        {
          AnswerImgUrl:
            'https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg',
          answer:
            '헤어고민 진단부터 혜택 안내 그리고 나에게 가장 가까운 미용실찾기 전문 어플리케이션입니다. 해당어플리케이선 200% 활용하기 설명서 시작하겠습니다.',
        },
        {
          AnswerImgUrl:
            'https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg',
          answer:
            '헤어고민 진단부터 혜택 안내 그리고 나에게 가장 가까운 미용실찾기 전문 어플리케이션입니다. 해당어플리케이선 200% 활용하기 설명서 시작하겠습니다.',
        },
        {
          AnswerImgUrl:
            'https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg',
          answer:
            '헤어고민 진단부터 혜택 안내 그리고 나에게 가장 가까운 미용실찾기 전문 어플리케이션입니다. 해당어플리케이선 200% 활용하기 설명서 시작하겠습니다.',
        },
        {
          AnswerImgUrl:
            'https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg',
          answer:
            '헤어고민 진단부터 혜택 안내 그리고 나에게 가장 가까운 미용실찾기 전문 어플리케이션입니다. 해당어플리케이선 200% 활용하기 설명서 시작하겠습니다.',
        },
      ],
    },
  ];

  // // 파람으로 데이터가 안들어오네
  // const data = route.params?.data;

  // useEffect(() => {
  //   console.log('efffect => ', data);
  // }, [data]);

  // console.log('outside => ', route.params?.data);
  return (
    <ViewContainer
      header
      screenName="Notice"
      goBack
      onPressGoBackIcon={() => {
        setNoticeClicked({});
      }}
      scrollable={false}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: colors.backgroundSecondary,
          width: windowWidth - 40,
          borderRadius: 15,
          padding: 30,
        }}
      >
        <ViewContainer
          style={{
            flex: 1,
            backgroundColor: colors.backgroundSecondary,
            alignItems: 'left',
          }}
          safeArea={false}
          safeAreaViewBounceColor={colors.backgroundSecondary}
          //   commonStyles.borderTest,
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              resizeMode="contain"
              source={_check_linear_gradient}
              style={[styles.icon, { width: 44, height: 44 }]}
            />
            <View style={styles.topHeaderContainer}>
              <Text style={[styles.topHeaderText, { fontWeight: '600' }]}>
                Hair Analyst
              </Text>
              <Text style={styles.topHeaderText}>23.05.05 </Text>
            </View>
          </View>
          <Spacer size={10} />
          {Mock[0].analyticInfo?.map((item, _idx) => (
            <View style={styles.mapContainer}>
              <Image
                resizeMode="cover"
                source={{
                  uri: item.AnswerImgUrl,
                }}
                style={styles.imageStyle}
              ></Image>
              <Text style={styles.title}>
                STEP.1 엠밤스 어플리케이션 사용설명서
              </Text>
              <Text style={styles.desc}>{item.answer}</Text>
            </View>
          ))}

          {/* Step [ ] - why not Scroll Down */}
        </ViewContainer>
      </View>
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  topHeaderContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  topHeaderText: { fontSize: 12 },
  imageStyle: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
    marginBottom: 10,
  },
  mapContainer: { gap: 6, marginBottom: 30 },
  title: { fontSize: 12, fontWeight: 600 },
  desc: { fontSize: 12, fontWeight: 300 },
});

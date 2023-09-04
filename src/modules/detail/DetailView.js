import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Service from '../../services';

import ViewContainer from '../../components/Container';
import { Text } from '../../components/StyledText';
import Spacer from '../../components/Spacer';

import { colors, commonStyles, windowHeight, windowWidth } from '../../styles';
import axios from 'axios';
const _check_linear_gradient = require('../../../assets/images/icons/check-linear-gradient.png');

export default function Detail({ route, user, ...props }) {
  const data = route.params?.data;

  const onPress = async () => {
    try {
      const dataToSend = {
        userId: user.id,
        analyticInfo: data,
      };
      const url =
        'http://ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/analytics';
      const response = await axios.post(url, dataToSend);
    } catch (error) {
      console.error('POST Error => ', error);
    }
  };

  return (
    <ViewContainer
      header
      screenName="Result"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('TABSCREENS', {
          screen: 'Result',
        });
      }}
      scrollable={false}
      style={{ flex: 1 }}
    >
      <View
        style={{
          // flex: 1,
          backgroundColor: colors.backgroundSecondary,
          width: windowWidth - 40,
          borderRadius: 15,
          padding: 30,
          height: windowHeight - 180,
        }}
      >
        <ViewContainer
          style={{
            // flex: 1,
            backgroundColor: colors.backgroundSecondary,
            alignItems: 'left',
          }}
          safeArea={false}
          safeAreaViewBounceColor={colors.backgroundSecondary}
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
          {data?.map((item, idx) => {
            if (item.answer && item.AnswerImgUrl)
              return (
                <View style={styles.mapContainer} key={`analysis-${idx}`}>
                  {item.AnswerImgUrl && (
                    <Image
                      resizeMode="cover"
                      source={{
                        uri: item.AnswerImgUrl,
                      }}
                      style={styles.imageStyle}
                    />
                  )}
                  <Text style={styles.title}>
                    STEP.1 엠밤스 어플리케이션 사용설명서
                  </Text>
                  {item.answer && (
                    <Text style={styles.desc}>{item.answer}</Text>
                  )}
                  {item.answer && item.AnswerImgUrl && <Spacer />}
                </View>
              );
          })}
          <Spacer size={120} />
          {data && (
            <TouchableOpacity onPress={onPress}>
              <View
                style={{
                  backgroundColor: '#221F32',
                  width: '100%',
                  height: 96,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={_check_linear_gradient}
                  style={[styles.icon, { width: 56, height: 56 }]}
                />
                <View style={[styles.topHeaderContainer, { gap: 5 }]}>
                  <Text style={{ fontWeight: '900', fontSize: 20 }}>
                    저장하시겠습니까?
                  </Text>
                  <Text style={styles.topHeaderText}>
                    진단 결과 저장보기 &gt;
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
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
  mapContainer: { gap: 10 },
  title: { fontSize: 12, fontWeight: 600 },
  desc: { fontSize: 12, fontWeight: 300 },
});

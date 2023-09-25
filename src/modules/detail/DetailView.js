import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Service from '../../services';

import ViewContainer from '../../components/Container';
import { Text } from '../../components/StyledText';
import Spacer from '../../components/Spacer';

import { colors, commonStyles, windowHeight, windowWidth } from '../../styles';
import axios from 'axios';
import SvgLinear from '../../components/SvgLinear';
import { Svg } from 'react-native-svg';

export default function Detail({ route, user, ...props }) {
  const { data, from, color } = route.params;
  const { tree, curAnalysis } = props;
  let today = new Date();

  let curBranch = tree.filter(item => item.id == curAnalysis)[0];

  // console.log('curBranch', curBranch.startGradient, curBranch.endGradient);

  const onPress = async () => {
    try {
      const dataToSend = {
        userId: user.id,
        analyticInfo: data,
        grouping: curBranch.branch,
      };
      const url =
        'http://ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/analytics';
      await axios.post(url, dataToSend);
      props.navigation.navigate('TABSCREENS', {
        screen: 'Result',
      });
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
            marginBottom: 0,
            paddingBottom: 0,
            backgroundColor: colors.backgroundSecondary,
            alignItems: 'left',
          }}
          safeArea={false}
          safeAreaViewBounceColor={colors.backgroundSecondary}
        >
          <View style={{ flexDirection: 'row' }}>
            {/* <Image
              resizeMode="contain"
              source={_check_linear_gradient}
              style={[styles.icon, { width: 44, height: 44 }]}
            /> */}
            <View style={{ width: 44, height: 44 }}>
              {from != 'Result' ? (
                <SvgLinear />
              ) : (
                <SvgLinear linearStart={color[0]} linearEnd={color[1]} />
              )}
            </View>
            <View style={styles.topHeaderContainer}>
              <Text style={[styles.topHeaderText, { fontWeight: '600' }]}>
                Hair Analyst
              </Text>
              <Text style={styles.topHeaderText}>
                {from != 'Result'
                  ? today.toISOString().split('T')[0]
                  : data[0].CreatedAt.split('T')[0]}
              </Text>
            </View>
          </View>
          <Spacer size={10} />
          {data?.map((item, idx) => {
            console.log('item =', item);
            if (item)
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
                  {item.Answer && (
                    <Text style={styles.title}>{item.Answer}</Text>
                  )}

                  {item.Answer && (
                    <Text style={styles.desc}>{item.answer}</Text>
                  )}
                  {item.Answer && item.AnswerImgUrl && <Spacer />}
                </View>
              );
          })}
          <Spacer size={120} />
          {data && from != 'Result' && (
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
                <View style={{ width: 50, height: 50 }}>
                  <SvgLinear />
                </View>
                {/* <Image
                  resizeMode="contain"
                  source={_check_linear_gradient}
                  style={[styles.icon, { width: 56, height: 56 }]}
                /> */}
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
    borderRadius: 10,
  },
  mapContainer: { gap: 10 },
  title: { fontSize: 12, fontWeight: 600 },
  desc: { fontSize: 12, fontWeight: 300 },
});

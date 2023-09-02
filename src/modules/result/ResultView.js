import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Service from '../../services';

import { Text } from '../../components/StyledText';
import ScrollViewContainer from '../../components/Container';
import CustomButton from '../../components/Button';

import { colors, commonStyles, windowHeight, windowWidth } from '../../styles';
import { Spacer, TouchableIcon } from '../../components';

const _check_linear_gradient = require('../../../assets/images/icons/check-linear-gradient.png');
const _close_button = require('../../../assets/images/icons/close-button.png');

export default function Result() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getResult = async () => {
      try {
        let res = await Service.getResult();
        console.log('result =', res.reverse());
        setResult(res);
      } catch (error) {
        console.log('result error', error);
      }
    };

    getResult();
  }, []);

  const ResultButton = prop => {
    return (
      <CustomButton
        rounded
        borderRadius={10}
        bgGradientStart={colors.backgroundSecondary}
        bgGradientEnd={colors.backgroundSecondary}
        style={{
          width: windowWidth - 40,
          justifyContent: 'flex-start',
          height: 135,
        }}
        onPress={() => {}}
      >
        <View
          style={{
            flexBasis: '20%',
            flexWrap: 'wrap',
            marginHorizontal: 20,
          }}
        >
          <Image
            resizeMode="contain"
            source={_check_linear_gradient}
            style={styles.icon}
          />
        </View>
        <View
          style={{
            flexBasis: '70%',
            flexWrap: 'wrap',
          }}
        >
          <Text fontWeight="700" size={16}>
            Hair Analyst
          </Text>
          <Spacer size={7} />
          <Text fontWeight="300" size={10}>
            {prop.CreatedAt.split('T')[0]}
          </Text>
          <Spacer size={7} />
          <Text>진단 결과 다시보기</Text>
        </View>

        <TouchableIcon
          style={{
            margin: 20,
            width: 18,
            height: 18,
            top: -30,
          }}
          icon={_close_button}
          onPress={() => {}}
        />
      </CustomButton>
    );
  };

  const NoResultData = (
    <View
      style={[
        commonStyles.container,
        { height: windowHeight - 350, justifyContent: 'center' },
      ]}
    >
      <Image
        resizeMode="contain"
        source={_check_linear_gradient}
        style={[styles.icon, { width: 80, height: 80 }]}
      />
      <Spacer />
      <Text hCenter size={22} fontWeight="400">
        진단 내용이 없습니다.
      </Text>
    </View>
  );

  return (
    <ScrollViewContainer
      header
      screenName="My Page"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Home');
      }}
    >
      {result && result.length === 0
        ? NoResultData
        : result.map((item, _) => {
            return (
              <View key={`result-${item.ID}`}>
                <ResultButton {...item} />
                <Spacer size={10} />
              </View>
            );
          })}
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
  closeIcon: {},
});

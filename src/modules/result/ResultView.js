import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Rect,
  Stop,
  SvgXml,
} from 'react-native-svg';

import Service from '../../services';

import { Text } from '../../components/StyledText';
import ScrollViewContainer from '../../components/Container';
import CustomButton from '../../components/Button';
import CustomModal from '../components/ExitModal';

import { colors, commonStyles, windowHeight, windowWidth } from '../../styles';
import { Spacer, TouchableIcon } from '../../components';
import Storage from '../../services/Storage';
import SvgLinear from '../../components/SvgLinear';

const _check_linear_gradient = require('../../../assets/images/icons/check-linear-gradient.png');
const _close_button = require('../../../assets/images/icons/close-button.png');
const _delete_linear_gardient = require('../../../assets/images/icons/delete-linear-gardient.png');

export default function Result(props) {
  const [result, setResult] = useState([]);
  const [modalVisible, setModalVisible] = useState({ isOpen: false, id: null });

  const openModal = id => {
    setModalVisible({ isOpen: true, id: id });
  };

  const closeModal = () => {
    setModalVisible({ isOpen: false, id: null });
  };

  const deleteUser = async () => {
    // await Storage.deleteUserData(props.user.id);
    props.login({});
    props.navigation.navigate('Auth');
  };

  const deleteResult = async () => {
    try {
      await Service.deleteAnalyst(modalVisible.id);
      closeModal();
      setResult(result.filter(item => item.ID !== modalVisible.id));
    } catch (error) {
      console.log('delete result error', error);
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getResult();
      setAnalysisToZero();
    });
    const getResult = async () => {
      try {
        if (props.user.id === undefined) {
          return;
        }
        let res = await Service.getResult(props.user.id);
        setResult(res.reverse());
      } catch (error) {
        console.log('result error', error);
      }
    };

    const setAnalysisToZero = () => {
      props.setAnalysisState(0);
    };

    return unsubscribe;
  }, [props.navigation]);

  const ResultButton = prop => {
    const gradientColorDataFromTree = props.tree.filter(
      item => item.branch === prop.Grouping,
    )[0];

    console.log('gradientColorDataFromTree', gradientColorDataFromTree);
    const color =
      prop.Grouping != 0 && gradientColorDataFromTree
        ? [
            gradientColorDataFromTree.startGradient,
            gradientColorDataFromTree.endGradient,
          ]
        : [colors.primaryGradientStart, colors.primaryGradientEnd];

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
        onPress={() => {
          props.navigation.navigate('DETAIL', {
            data: prop.AnalyticInfo,
            color: color,
            from: 'Result',
          });
        }}
      >
        <View
          style={{
            flexBasis: '20%',
            flexWrap: 'wrap',
            marginHorizontal: 20,
          }}
        >
          <SvgLinear linearStart={color[0]} linearEnd={color[1]} />
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
          onPress={() => {
            openModal(prop.ID);
          }}
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
      screenName="Counseling"
      goBack
      onPressGoBackIcon={() => {
        props.navigation.navigate('Home');
      }}
      style={{ paddingBottom: 160 }}
    >
      <CustomButton
        bgGradientEnd="red"
        bgGradientStart="red"
        onPress={deleteUser}
      >
        <Text fontWeight="700" size={16}>
          로그아웃
        </Text>
      </CustomButton>
      <Spacer />
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
      <CustomModal
        isVisible={modalVisible.isOpen}
        closeModal={closeModal}
        icon={
          <Image
            resizeMode="contain"
            source={_delete_linear_gardient}
            style={[styles.icon, { width: 100, height: 80 }]}
          />
        }
        button={
          <CustomButton
            rounded
            borderRadius={20}
            style={{ height: 32, width: 124 }}
            bgGradientStart="#fff"
            bgGradientEnd="#fff"
            onPress={deleteResult}
          >
            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>
              삭제하기
            </Text>
          </CustomButton>
        }
      />
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
});

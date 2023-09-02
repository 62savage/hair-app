import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Text } from '../../components/StyledText';
import { windowWidth, windowHeight } from '../../styles';

import { Spacer } from '../../components';
import ScrollViewContainer from '../../components/Container';
import CustomModal from '../components/ExitModal';
import ButtonAnswer from './components/ButtonAnswer';
import PhotoAnswer from './components/PhotoAnswer';

export default function AnalysisScreen(props) {
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const goHome = () => {
    setModalVisible(false);
    props.navigation.navigate('Home');
  };

  useEffect(() => {
    fetch(
      'http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/486',
    )
      .then(data => data.json())
      .then(setData);
  }, []);
  console.log(data.ImgUrl);
  return (
    <ScrollViewContainer
      header
      screenName="Hair Analyst"
      goBack
      onPressGoBackIcon={openModal}
    >
      <View style={styles.container}>
        {data.ImgUrl && (
          <>
            <Image
              resizeMode="contain"
              source={{
                uri: data.ImgUrl,
              }}
              style={styles.imageStyle}
            />
          </>
        )}
        <Text hCenter size={22}>
          {data.Name}
        </Text>
        <Spacer />
        {data.ChildrenIDs?.map((item, idx) =>
          item.imgUrl === '' ? (
            <ButtonAnswer name={item.name} key={`answer-${idx}`} />
          ) : (
            <PhotoAnswer
              name={item.name}
              imgUrl={item.imgUrl}
              key={`answer-${idx}`}
            />
          ),
        )}
      </View>
      <CustomModal
        isVisible={modalVisible}
        closeModal={closeModal}
        goHome={goHome}
      />
    </ScrollViewContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    width: windowWidth - 40,
    gap: 10,
    height: windowHeight - 280,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#221F32',
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
    fontWeight: '800',
  },
  imageStyle: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1,
  },
});

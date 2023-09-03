import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Text } from '../../components/StyledText';
import { windowWidth } from '../../styles';

import { Spacer } from '../../components';
import ScrollViewContainer from '../../components/Container';
import CustomModal from '../components/ExitModal';
import ButtonAnswer from './components/ButtonAnswer';
import PhotoAnswer from './components/PhotoAnswer';

export default function AnalysisScreen(props) {
  const [data, setData] = useState({});
  // const [a, setA] = useState([316, 359, 478, 739, 887]);
  const [level, setLevel] = useState([316, 359, 478, 739, 887]);
  const [record, setRecord] = useState([]);
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

  const fetchData = async id => {
    await fetch(
      `http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/${id}`,
    )
      .then(res => res.json())
      .then(res => {
        setData(res);
        setRecord(prev => [...prev, res]);
      });
  };

  const goToNext = async id => {
    const data = await fetch(
      `http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/${id}/children`,
    ).then(res => res.json());
    fetch(
      `http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/${data[0]?.ID}`,
    )
      .then(res => res.json())
      .then(res => {
        if (res.ChildrenIDs && !res.ChildrenIDs.length) {
          if (res.IsFinal) {
            // fetch total data to the server
            console.log('FINAL!!!', record);
            props.navigation.navigate('Home');
            return;
          }
          return fetchData(level[res.NextCategory]);
        }
        setData(res);
      });
  };

  console.log('RECORD    => ', record);

  useEffect(() => {
    fetch(
      'http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/359',
    )
      .then(data => data.json())
      .then(setData);
  }, []);

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
            <ButtonAnswer
              name={item.name}
              onPress={() => goToNext(item.id)}
              key={`answer-${idx}`}
            />
          ) : (
            <PhotoAnswer
              name={item.name}
              imgUrl={item.imgUrl}
              onPress={() => goToNext(item.id)}
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
  // container: {
  //   gap: 10,
  //   paddingHorizontal: 20,
  // },
  container: {
    width: windowWidth - 40,
    gap: 10,
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

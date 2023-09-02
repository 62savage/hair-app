import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import CustomButton from '../../components/Button';

import { windowWidth, windowHeight } from '../../styles';
import { Spacer } from '../../components';
import ScrollViewContainer from '../../components/Container';
import CustomModal from './TestModal';
import { Text } from '../../components/StyledText';

export default function Mbombs19(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <CustomButton title="OPEN" onPress={openModal}>
        <Text>O</Text>
      </CustomButton>
      <CustomModal isVisible={modalVisible} closeModal={closeModal} />
    </View>
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
  },
});
